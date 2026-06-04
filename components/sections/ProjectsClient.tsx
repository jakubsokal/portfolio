"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Search, X } from "lucide-react";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import type { GitHubRepo } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectsClientProps {
  repos: GitHubRepo[];
  languages: string[];
  topics: string[];
  username: string;
}

type SortOption = "stars" | "updated" | "name";

export default function ProjectsClient({
  repos,
  languages,
  topics,
  username,
}: ProjectsClientProps) {
  const [search, setSearch] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [sort, setSort] = useState<SortOption>("stars");
  const [sortDir, setSortDir] = useState<'desc' | 'asc'>('desc');
  const [showAllTopics, setShowAllTopics] = useState(false);

  const visibleTopics = showAllTopics ? topics : topics.slice(0, 8);

  const filtered = useMemo(() => {
    let result = [...repos];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.description?.toLowerCase().includes(q) ||
          r.topics?.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (selectedLanguage) {
      result = result.filter((r) => r.language === selectedLanguage);
    }

    if (selectedTopic) {
      result = result.filter((r) => r.topics?.includes(selectedTopic));
    }

    result.sort((a, b) => {
      let cmp = 0;
      if (sort === "stars") cmp = b.stargazers_count - a.stargazers_count;
      if (sort === "updated")
        cmp = new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      if (sort === "name") cmp = a.name.localeCompare(b.name);
      return sortDir === 'desc' ? cmp : -cmp;
    });

    return result;
  }, [repos, search, selectedLanguage, selectedTopic, sort]);

  const clearFilters = () => {
    setSearch("");
    setSelectedLanguage(null);
    setSelectedTopic(null);
  };

  const hasActiveFilters = search || selectedLanguage || selectedTopic;

  if (repos.length === 0) {
    return (
      <SectionWrapper id="projects">
        <SectionHeader
          eyebrow="Open Source"
          title="GitHub Projects."
          subtitle="My public repositories. Explore what I've been building."
        />
        <div className="text-center py-20 text-ink-tertiary dark:text-night-secondary-text">
          <p>Could not load GitHub repositories. Please check your username and API token.</p>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-amber hover:underline text-sm"
          >
            View on GitHub <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="projects">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <SectionHeader
          eyebrow="Open Source"
          title="GitHub Projects."
          subtitle="My public repositories. Explore what I've been building."
          className="mb-0"
        />
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center gap-1.5 text-sm text-ink-secondary dark:text-night-secondary-text hover:text-amber transition-colors"
        >
          View all on GitHub
          <ExternalLink size={13} aria-hidden="true" />
        </a>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-tertiary dark:text-night-secondary-text pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-9 pr-4 py-2.5 text-sm bg-canvas dark:bg-night-secondary border border-border-light dark:border-night-border rounded-lg text-ink dark:text-night-text placeholder:text-ink-tertiary dark:placeholder:text-night-secondary-text focus:outline-none focus:border-amber/50 transition-colors"
              aria-label="Search projects"
            />
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="px-3 py-2.5 text-sm bg-canvas dark:bg-night-secondary border border-border-light dark:border-night-border rounded-lg text-ink dark:text-night-text focus:outline-none focus:border-amber/50 transition-colors cursor-pointer"
            aria-label="Sort projects"
          >
            <option value="stars">Sort: Stars</option>
            <option value="updated">Sort: Recently updated</option>
            <option value="name">Sort: Name</option>
          </select>
        </div>

        {languages.length > 0 && (
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by language">
            <span className="text-xs font-mono text-ink-tertiary dark:text-night-secondary-text self-center">
              Language:
            </span>
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() =>
                  setSelectedLanguage(selectedLanguage === lang ? null : lang)
                }
                aria-pressed={selectedLanguage === lang}
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200",
                  selectedLanguage === lang
                    ? "bg-amber text-night border-amber"
                    : "bg-transparent border-border-light dark:border-night-border text-ink-secondary dark:text-night-secondary-text hover:border-amber/50 hover:text-amber"
                )}
              >
                {lang}
              </button>
            ))}
          </div>
        )}

        {topics.length > 0 && (
          <div className="flex flex-wrap gap-2 items-center" role="group" aria-label="Filter by topic">
            <span className="text-xs font-mono text-ink-tertiary dark:text-night-secondary-text">
              Topics:
            </span>
            {visibleTopics.map((topic) => (
              <button
                key={topic}
                onClick={() =>
                  setSelectedTopic(selectedTopic === topic ? null : topic)
                }
                aria-pressed={selectedTopic === topic}
                className={cn(
                  "px-3 py-1 rounded-full text-xs border transition-all duration-200",
                  selectedTopic === topic
                    ? "bg-amber/15 text-amber border-amber/40"
                    : "bg-transparent border-border-light dark:border-night-border text-ink-secondary dark:text-night-secondary-text hover:border-amber/40 hover:text-amber"
                )}
              >
                #{topic}
              </button>
            ))}
            {topics.length > 8 && (
              <button
                onClick={() => setShowAllTopics((prev) => !prev)}
                className="text-xs text-amber hover:underline"
              >
                {showAllTopics ? "Show less" : `+${topics.length - 8} more`}
              </button>
            )}
          </div>
        )}

        {hasActiveFilters && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-ink-tertiary dark:text-night-secondary-text">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            </span>
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 text-xs text-amber hover:underline"
              aria-label="Clear all filters"
            >
              <X size={11} aria-hidden="true" />
              Clear filters
            </button>
          </div>
        )}
      </div>

      <AnimatePresence mode="popLayout">
        {filtered.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="col-span-full text-center py-20 text-ink-tertiary dark:text-night-secondary-text"
          >
            <p className="text-lg mb-2">No projects match your search.</p>
            <button onClick={clearFilters} className="text-sm text-amber hover:underline">
              Clear filters
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filtered.map((repo, i) => (
              <ProjectCard key={repo.id} repo={repo} index={i} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
