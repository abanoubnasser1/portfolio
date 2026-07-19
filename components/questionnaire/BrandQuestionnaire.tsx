"use client";

import { useState } from "react";
import { questionnaireSections, QuestionnaireField } from "@/lib/questionnaire";

type FormValue = string | string[];
type FormState = Record<string, FormValue>;

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnjedejb"; 

function Field({
  field,
  value,
  otherValue,
  onChange,
  onOtherChange,
}: {
  field: QuestionnaireField;
  value: FormValue | undefined;
  otherValue: string;
  onChange: (id: string, value: FormValue) => void;
  onOtherChange: (id: string, value: string) => void;
}) {
  const label = (
    <label className="mb-3 block text-sm font-medium text-white sm:text-base">
      {field.labelEn}
      {field.required && <span className="ml-1 text-zinc-500">*</span>}
      {field.labelAr && (
        <span className="mt-1 block text-xs font-normal text-zinc-500" dir="rtl">
          {field.labelAr}
        </span>
      )}
    </label>
  );

  const baseInputClass =
    "w-full min-w-0 rounded-2xl border border-white/10 bg-transparent px-5 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-white/30";

  if (field.type === "short_text") {
    return (
      <div>
        {label}
        <input
          type="text"
          required={field.required}
          value={(value as string) ?? ""}
          onChange={(e) => onChange(field.id, e.target.value)}
          className={baseInputClass}
        />
      </div>
    );
  }

  if (field.type === "long_text") {
    return (
      <div>
        {label}
        <textarea
          rows={4}
          required={field.required}
          value={(value as string) ?? ""}
          onChange={(e) => onChange(field.id, e.target.value)}
          className={`${baseInputClass} resize-none rounded-2xl`}
        />
      </div>
    );
  }

  if (field.type === "single_choice") {
    const selected = (value as string) ?? "";
    return (
      <div>
        {label}
        <div className="flex flex-wrap gap-3">
          {field.options?.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(field.id, opt.value)}
              className={`rounded-full border px-5 py-2 text-sm transition-colors ${
                selected === opt.value
                  ? "border-white bg-white text-black"
                  : "border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"
              }`}
            >
              {opt.labelEn}
            </button>
          ))}
          {field.hasOther && (
            <button
              type="button"
              onClick={() => onChange(field.id, "other")}
              className={`rounded-full border px-5 py-2 text-sm transition-colors ${
                selected === "other"
                  ? "border-white bg-white text-black"
                  : "border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"
              }`}
            >
              Other
            </button>
          )}
        </div>
        {field.hasOther && selected === "other" && (
          <input
            type="text"
            placeholder="Please specify"
            value={otherValue}
            onChange={(e) => onOtherChange(field.id, e.target.value)}
            className={`${baseInputClass} mt-3`}
          />
        )}
      </div>
    );
  }

  // multi_choice
  const selectedList = (value as string[]) ?? [];
  function toggle(optValue: string) {
    const next = selectedList.includes(optValue)
      ? selectedList.filter((v) => v !== optValue)
      : [...selectedList, optValue];
    onChange(field.id, next);
  }

  return (
    <div>
      {label}
      <div className="flex flex-wrap gap-3">
        {field.options?.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => toggle(opt.value)}
            className={`rounded-full border px-5 py-2 text-sm transition-colors ${
              selectedList.includes(opt.value)
                ? "border-white bg-white text-black"
                : "border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"
            }`}
          >
            {opt.labelEn}
          </button>
        ))}
        {field.hasOther && (
          <button
            type="button"
            onClick={() => toggle("other")}
            className={`rounded-full border px-5 py-2 text-sm transition-colors ${
              selectedList.includes("other")
                ? "border-white bg-white text-black"
                : "border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"
            }`}
          >
            Other
          </button>
        )}
      </div>
      {field.hasOther && selectedList.includes("other") && (
        <input
          type="text"
          placeholder="Please specify"
          value={otherValue}
          onChange={(e) => onOtherChange(field.id, e.target.value)}
          className={`${baseInputClass} mt-3`}
        />
      )}
    </div>
  );
}

export default function BrandQuestionnaire() {
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState<FormState>({});
  const [otherValues, setOtherValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const section = questionnaireSections[stepIndex];
  const isLastStep = stepIndex === questionnaireSections.length - 1;

  function handleChange(id: string, value: FormValue) {
    setFormData((prev) => ({ ...prev, [id]: value }));
  }

  function handleOtherChange(id: string, value: string) {
    setOtherValues((prev) => ({ ...prev, [id]: value }));
  }

  function validateStep() {
    return section.fields.every((field) => {
      if (!field.required) return true;
      const value = formData[field.id];
      if (Array.isArray(value)) return value.length > 0;
      return !!value;
    });
  }

  function goNext() {
    if (!validateStep()) return;
    setStepIndex((i) => Math.min(i + 1, questionnaireSections.length - 1));
  }

  function goBack() {
    setStepIndex((i) => Math.max(i - 1, 0));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateStep()) return;

    setStatus("loading");

    const payload: Record<string, string> = {};
    for (const sec of questionnaireSections) {
      for (const field of sec.fields) {
        const value = formData[field.id];
        const otherValue = otherValues[field.id];
        let finalValue = Array.isArray(value) ? value.join(", ") : value ?? "";
        if (otherValue) finalValue = `${finalValue} (Other: ${otherValue})`;
        payload[field.labelEn] = finalValue;
      }
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-2xl py-24 text-center">
        <h2 className="font-syne text-3xl font-bold text-white">Thank you!</h2>
        <p className="mt-4 text-zinc-400">
          Your answers have been received. I&apos;ll be in touch soon to kick things off.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-3xl">
      <div className="mb-10">
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-zinc-500">
          Section {stepIndex + 1} of {questionnaireSections.length}
        </p>
        <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-white transition-all duration-300"
            style={{
              width: `${((stepIndex + 1) / questionnaireSections.length) * 100}%`,
            }}
          />
        </div>
        <h2 className="font-syne mt-6 text-2xl font-bold text-white sm:text-3xl">
          {section.title}
        </h2>
      </div>

      <div className="flex flex-col gap-8">
        {section.fields.map((field) => (
          <Field
            key={field.id}
            field={field}
            value={formData[field.id]}
            otherValue={otherValues[field.id] ?? ""}
            onChange={handleChange}
            onOtherChange={handleOtherChange}
          />
        ))}
      </div>

      <div className="mt-12 flex items-center justify-between">
        <button
          type="button"
          onClick={goBack}
          disabled={stepIndex === 0}
          className="rounded-full border border-white/10 px-6 py-2.5 text-xs uppercase tracking-widest text-zinc-400 transition-colors hover:border-white/30 hover:text-white disabled:opacity-30"
        >
          Back
        </button>

        {isLastStep ? (
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-full border border-white/10 bg-white px-8 py-2.5 text-xs uppercase tracking-widest text-black transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {status === "loading" ? "Submitting..." : "Submit"}
          </button>
        ) : (
          <button
            type="button"
            onClick={goNext}
            className="rounded-full border border-white/10 bg-white px-8 py-2.5 text-xs uppercase tracking-widest text-black transition-opacity hover:opacity-90"
          >
            Next
          </button>
        )}
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-400">
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  );
}