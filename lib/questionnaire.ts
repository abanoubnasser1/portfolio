export type FieldType = "short_text" | "long_text" | "single_choice" | "multi_choice";

export interface FieldOption {
  value: string;
  labelEn: string;
  labelAr?: string;
}

export interface QuestionnaireField {
  id: string;
  labelEn: string;
  labelAr?: string;
  helperEn?: string;
  type: FieldType;
  required?: boolean;
  options?: FieldOption[];
  hasOther?: boolean;
}

export interface QuestionnaireSection {
  title: string;
  description?: string;
  fields: QuestionnaireField[];
}

export const questionnaireSections: QuestionnaireSection[] = [
  {
    title: "Basic Information",
    fields: [
      {
        id: "brand_name",
        labelEn: "Write your brand name exactly as you would like it to appear in the design",
        labelAr: "اسم العلامة التجارية بشكل دقيق كما تريده أن يظهر",
        type: "short_text",
        required: true,
      },
      {
        id: "name_story",
        labelEn: "Does that name have a special story or meaning?",
        labelAr: "وهل لهذا الاسم المختار قصة أو معنى خاص؟",
        type: "long_text",
      },
      {
        id: "tagline",
        labelEn: "Do you have a short tagline or slogan?",
        labelAr: "هل لديك عبارة أو شعار نصي؟",
        type: "short_text",
      },
      {
        id: "offer_type",
        labelEn: "Do you offer services or products?",
        labelAr: "هل تقدمون خدمات أم منتجات؟",
        type: "single_choice",
        required: true,
        hasOther: true,
        options: [
          { value: "services", labelEn: "Services", labelAr: "خدمات" },
          { value: "products", labelEn: "Products", labelAr: "منتجات" },
        ],
      },
      {
        id: "offer_details",
        labelEn: "What are the services/products you provide?",
        labelAr: "ما هي الخدمة/المنتج الذي تقدمه؟",
        type: "long_text",
        required: true,
      },
    ],
  },
  {
    title: "Marketing Study",
    fields: [
      {
        id: "strength_points",
        labelEn: "What are your distinctive strength points from your competitors?",
        labelAr: "ما هي نقاط القوة التي تميّزكم عن المنافسين؟",
        type: "long_text",
      },
      {
        id: "adjectives",
        labelEn:
          "Mention some adjectives and purposes you'd like to communicate through your logo (e.g. strong, exciting, warm, welcoming, inventive, humorous, feminine, serene, athletic).",
        labelAr: "اذكر الأهداف والمعاني المراد التواصل بها مع العميل من خلال الشعار",
        type: "long_text",
        required: true,
      },
    ],
  },
  {
    title: "Target Audience",
    fields: [
      {
        id: "audience_age",
        labelEn: "The age range of your target audience.",
        labelAr: "الفئة العمرية للجمهور المستهدف.",
        type: "multi_choice",
        hasOther: true,
        options: [
          { value: "0-5", labelEn: "0-5" },
          { value: "5-12", labelEn: "5-12" },
          { value: "12-18", labelEn: "12-18" },
          { value: "18-24", labelEn: "18-24" },
          { value: "24-35", labelEn: "24-35" },
          { value: "35-60", labelEn: "35-60" },
          { value: "60+", labelEn: "+60" },
        ],
      },
      {
        id: "audience_gender",
        labelEn: "Gender",
        labelAr: "النوع",
        type: "single_choice",
        options: [
          { value: "male", labelEn: "Male", labelAr: "ذكر" },
          { value: "female", labelEn: "Female", labelAr: "أنثى" },
        ],
      },
      {
        id: "audience_geo",
        labelEn: "Geographic range",
        labelAr: "النطاق الجغرافي",
        type: "short_text",
      },
      {
        id: "audience_interests",
        labelEn: "Interests",
        labelAr: "الاهتمامات",
        type: "long_text",
      },
      {
        id: "audience_income",
        labelEn: "Income",
        labelAr: "الدخل",
        type: "single_choice",
        hasOther: true,
        options: [
          {
            value: "low",
            labelEn: "Low income: limited budget, focuses on basic needs.",
          },
          {
            value: "middle",
            labelEn: "Middle income: affords essentials and some extras.",
          },
          {
            value: "high",
            labelEn: "High income: luxury goods and investment potential.",
          },
        ],
      },
    ],
  },
  {
    title: "Logo Design Recommendations",
    fields: [
      {
        id: "logo_restrictions",
        labelEn: "Are there certain restrictions about the logo?",
        labelAr: "هل لديك أية قيود للشعار؟",
        type: "long_text",
      },
      {
        id: "colors_wanted",
        labelEn: "What colors do you wish to be used?",
        labelAr: "ما هي الألوان المراد استخدامها في الشعار",
        type: "long_text",
        required: true,
      },
      {
        id: "colors_unwanted",
        labelEn: "What colors do you wish NOT to be used?",
        labelAr: "ما هي الألوان المراد عدم استخدامها في الشعار",
        type: "long_text",
      },
      {
        id: "logos_admired",
        labelEn:
          "Are there logos and/or graphics that you really admire? Paste the URLs and explain why they appeal to you (they don't need to be from your industry).",
        labelAr: "هل لديك أية أشكال أو رسومات أو شعارات تعجبك؟",
        type: "long_text",
      },
      {
        id: "logos_disliked",
        labelEn:
          "Are there logos and/or graphics you dislike? Paste the URLs and explain why they don't appeal to you.",
        labelAr: "هل لديك أية أشكال أو رسومات أو شعارات لا تعجبك؟",
        type: "long_text",
      },
      {
        id: "sketches",
        labelEn: "Do you have any sketches, samples, etc. you'd prefer to follow?",
        labelAr: "هل لديك رسومات أو أمثلة أو تصوّر لنتبعه؟",
        type: "long_text",
      },
      {
        id: "visual_style",
        labelEn:
          "What visual style do you want your brand to reflect? (modern, classic, cheerful, serious)",
        labelAr: "ما هو الأسلوب البصري الذي ترغبون أن تعكسه العلامة التجارية؟",
        type: "short_text",
      },
      {
        id: "logo_usage",
        labelEn: "Where will your logo mainly be used?",
        labelAr: "كيف سيتم استخدام الشعار بشكل أساسي؟",
        type: "multi_choice",
        required: true,
        hasOther: true,
        options: [
          { value: "print", labelEn: "Print" },
          { value: "web", labelEn: "Web" },
        ],
      },
      {
        id: "style_preference",
        labelEn: "What sort of style do you prefer?",
        labelAr: "ما نوع الأسلوب الذي تفضله",
        type: "multi_choice",
        required: true,
        hasOther: true,
        options: [
          { value: "wordmark", labelEn: "Wordmark", labelAr: "الشعار النصي" },
          { value: "symbol", labelEn: "Symbol", labelAr: "الشعار الرمزي الوصفي" },
          { value: "abstract", labelEn: "Abstract mark", labelAr: "الشعار الرمزي التجريدي" },
          { value: "letterform", labelEn: "Letterform", labelAr: "شعار حرفي" },
          { value: "lettermark", labelEn: "Lettermark", labelAr: "شعار حرفي متعدد" },
          { value: "combination", labelEn: "Combination mark", labelAr: "شعار أيقوني نصي" },
          { value: "mascot", labelEn: "Mascot", labelAr: "شعار الشخصية" },
          { value: "emblem", labelEn: "Emblem", labelAr: "شعار اللافتة" },
        ],
      },
      {
        id: "traditional_or_modern",
        labelEn: "Traditional/vintage or modern and up-to-date?",
        labelAr: "هل تود الشعار أن يكون مرتبط بالماضي والأصالة أم حديث ومرتبط بالرواج",
        type: "single_choice",
        required: true,
        options: [
          { value: "traditional", labelEn: "Traditional", labelAr: "الأصالة" },
          { value: "modern", labelEn: "Modern", labelAr: "الحداثة" },
        ],
      },
      {
        id: "symbols",
        labelEn:
          "Do you have any particular symbols you want your brand associated with? (e.g. a lion, ship, mountain, tree)",
        labelAr: "هل لديك أي رموز معينة تود أن يرتبط بها منتجاتك أو شركتك",
        type: "long_text",
      },
    ],
  },
  {
    title: "Anything Else",
    fields: [
      {
        id: "final_notes",
        labelEn: "Is there anything else you want to tell us?",
        labelAr: "أي معلومات إضافية تحب تشاركها معنا",
        type: "long_text",
      },
    ],
  },
];