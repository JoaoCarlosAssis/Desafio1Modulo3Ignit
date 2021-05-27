import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { FiCalendar, FiUser } from 'react-icons/fi';
import { RichText } from 'prismic-dom';
import Header from '../components/Header';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface Posts {
  posts: Post[];
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home(posts: Posts): JSX.Element {
  console.log(posts);
  return (
    <>
      <Header />
      <main className={commonStyles.container}>
        <div className={styles.posts}>
          <a>
            <strong>Como utilizar Hooks</strong>
            <span>Pensando em sincronização em vez de ciclos de vida.</span>
            <div className={styles.information}>
              <span>
                <FiCalendar />
                <time>19 abril 2021</time>
              </span>

              <span>
                <FiUser />
                João Carlos
              </span>
            </div>
          </a>
          <a>
            <strong>Como utilizar Hooks</strong>
            <span>Pensando em sincronização em vez de ciclos de vida.</span>
            <div className={styles.information}>
              <span>
                <FiCalendar />
                <time>19 abril 2021</time>
              </span>

              <span>
                <FiUser />
                João Carlos
              </span>
            </div>
          </a>
          <a>
            <strong>Como utilizar Hooks</strong>
            <span>Pensando em sincronização em vez de ciclos de vida.</span>
            <div className={styles.information}>
              <span>
                <FiCalendar />
                <time>19 abril 2021</time>
              </span>

              <span>
                <FiUser />
                João Carlos
              </span>
            </div>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const postsResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'posts')],
    {
      fetch: ['posts.title', 'posts.content'],
      pageSize: 100,
    }
  );

  console.log(JSON.stringify(postsResponse, null, 2));
  return {
    props: {},
  };
};
