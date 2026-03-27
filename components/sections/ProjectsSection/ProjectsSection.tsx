"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import { SectionHeader } from "@/components/SectionHeader/SectionHeader";
import type { ProjectItem } from "@/lib/types/portfolio";

import styles from "./projects-section.module.css";
import { prefersReducedMotion, splitDescription } from "@/helper";

type Props = {
  projects: ProjectItem[];
};

export function ProjectsSection({ projects }: Props) {
  const [selected, setSelected] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const skipInitialScroll = useRef(true);

  const current = projects[selected];

  const showActionBar = !!(
    current.link ||
    current.repositoryLink ||
    current.repositoryLink
  );

  const lines = useMemo(
    () => (current ? splitDescription(current.projectDescription) : []),
    [current],
  );

  useEffect(() => {
    if (skipInitialScroll.current) {
      skipInitialScroll.current = false;
      return;
    }
    const root = listRef.current;
    if (!root) return;
    const el = root.querySelector<HTMLElement>(
      `[data-project-index="${selected}"]`,
    );
    el?.scrollIntoView({
      block: "nearest",
      inline: "nearest",
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });

    const previewEl = document.querySelector<HTMLElement>("#preview-section");
    previewEl?.scrollIntoView({
      block: "nearest",
      inline: "nearest",
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  }, [selected]);

  if (!projects.length) {
    return (
      <section id="projects" className={`section ${styles.wrap}`}>
        <div className="shell">
          <SectionHeader label="Portfolio" title="Projects" />
          <p className="muted">Projects will show here.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className={`section ${styles.wrap}`}>
      <div className="shell">
        <SectionHeader label="Portfolio" title="Projects" />

        <div className={styles.layout}>
          <div className={styles.listColumn}>
            <div
              ref={listRef}
              className={styles.list}
              role="tablist"
              aria-label="Select a project"
            >
              {projects?.map?.((p, index) => (
                <button
                  key={`${index}-${p.projectName}`}
                  type="button"
                  role="tab"
                  aria-selected={selected === index}
                  data-active={selected === index}
                  data-project-index={index}
                  className={styles.item}
                  onClick={() => {
                    setSelected(index);
                    setPreviewOpen(false);
                  }}
                >
                  <div className={styles.row}>
                    {p.logoUrl ? (
                      <Image
                        src={p.logoUrl}
                        alt=""
                        width={44}
                        height={44}
                        className={styles.thumb}
                      />
                    ) : null}
                    <div className={styles.text}>
                      <p className={styles.name}>{p.projectName}</p>
                      <p className={styles.inst}>{p.institution}</p>
                    </div>
                  </div>
                  <span className={styles.arrow} aria-hidden>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 512 1024"
                      fill="currentColor"
                    >
                      <path d="M0 192l512 320L0 832V192z" />
                    </svg>
                  </span>
                </button>
              ))}
            </div>
            {projects.length > 4 ? (
              <p className={styles.hint} aria-hidden="true">
                Scroll the list to see all projects
              </p>
            ) : null}
          </div>

          <div id="preview-section" className={styles.panelShell}>
            {previewOpen && current?.link ? (
              <div className={styles.previewView}>
                <div className={styles.viewHeader}>
                  <SectionHeader
                    className={styles.previewHeading}
                    variant="compact"
                    titleAs="h3"
                    label="Preview"
                    title={current.projectName}
                  />
                  <button
                    type="button"
                    className={styles.btn}
                    onClick={() => setPreviewOpen(false)}
                  >
                    ← Back to details
                  </button>
                </div>
                <div className={styles.frameWrap}>
                  <iframe
                    className={styles.frame}
                    src={current.link}
                    title={current.projectName}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  />
                </div>
              </div>
            ) : (
              current && (
                <div className={`card ${styles.detail}`}>
                  <div className={styles.detailScroll}>
                    <h3>About</h3>
                    {lines.length > 0 ? (
                      <ul className={styles.lines}>
                        {lines.map((line, i) => (
                          <li key={`${i}-${line.slice(0, 32)}`}>{line}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="muted">No description provided.</p>
                    )}
                  </div>
                  {showActionBar ? (
                    <div className={styles.detailFooter}>
                      <div className={styles.actions}>
                        {current.link ? (
                          <>
                            <button
                              type="button"
                              className={styles.btn}
                              onClick={() => setPreviewOpen(true)}
                            >
                              Open preview
                            </button>
                            <a
                              href={current.link}
                              target="_blank"
                              rel="noreferrer"
                              className={styles.linkOut}
                            >
                              Open in new tab
                            </a>
                          </>
                        ) : null}
                        {current.repositoryLink ? (
                          <a
                            href={current.repositoryLink}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.linkOut}
                          >
                            {current.repositoryLinkBackend ? "FE " : ""}
                            Repository
                          </a>
                        ) : null}
                        {current.repositoryLinkBackend ? (
                          <a
                            href={current.repositoryLinkBackend}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.linkOut}
                          >
                            BE Repository
                          </a>
                        ) : null}
                      </div>
                    </div>
                  ) : null}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
