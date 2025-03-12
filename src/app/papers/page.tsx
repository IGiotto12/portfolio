'use client';

import Image from 'next/image';
import styles from './papers.module.css';

export default function Papers() {
  return (
    <div className={styles.content}>
      <div className={styles.research_interest}>
        <h2>Research Interests</h2>
        <p>
          My research interests lie in the areas of ML method and its application such to the extent of AGI. 
          Currently my focus of the research is about AI agent, a design of intelligence incoperted with LLM 
          such as GPT. AI agents generally have the internal reasoning, memory and external tool, while their
          performance may vary depending on the underlying method being utilized.
        </p>
      </div>

      <div className={styles.pubs_gallery}>
        <div className={styles.pub_card}>
          <div className={styles.image_container}>
            <Image 
              src="/images/cover.png" 
              alt="Paper Image"
              width={400}
              height={250}
              priority
              className={styles.card_image}
            />
          </div>
          <h3>Rating Model on Google Local Review Dataset</h3>
          <p>Authors: Yunqi Zhang, Jason Wang, Rui Wang, Jiaqi Wu</p>
          <p>Journal: Dec 2024</p>
          <a href="/papers/Rating Prediction Model.pdf" target="_blank" rel="noopener noreferrer">Read More</a>
        </div>

        <div className={styles.pub_card}>
          <div className={styles.image_container}>
            <Image 
              src="/images/mobius.png" 
              alt="Publication Image"
              width={400}
              height={250}
              className={styles.card_image}
            />
          </div>
          <h3>Mobius Space</h3>
          <p>Authors: Jiaqi Wu</p>
          <p>Date: March 17, 2024</p>
          <a href="/papers/Mobius Space.pdf" target="_blank" rel="noopener noreferrer">Read More</a>
        </div>

        <div className={styles.pub_card}>
          <div className={styles.image_container}>
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Cognitive_Science_Hexagon.svg" 
              alt="Paper Image"
              width={400}
              height={250}
              className={styles.card_image}
              style={{ backgroundColor: '#f5f5f5' }}
            />
          </div>
          <h3>Enactive Framework</h3>
          <p>Authors: Jiaqi Wu, Luyao Chen</p>
          <p>Date: Feb 7, 2024</p>
          <a href="/papers/Enactive Framework of Individual In the Absence of Vision System.pdf" target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      </div>
    </div>
  );
} 