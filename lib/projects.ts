import { projects } from "@/data/projects";

export function getProjects() {
  return projects;
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}