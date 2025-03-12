'use client';

import styles from './resume.module.css';

export default function Resume() {
  return (
    <div className={styles.content}>
      <iframe 
        className={styles.frame}
        src="/resume.pdf"
        frameBorder="0"
        title="Resume PDF"
      />
    </div>
  );
} 