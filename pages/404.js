import Layout from "@/components/Layout";
import { FaExclamationTriangle } from "react-icons/fa";
import styles from "@/styles/404.module.css";
import Link from "next/link";
export default function ErrorNotFound() {
  return (
    <Layout title="Page not found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle />
          404
        </h1>
        <h4>The page you're looking doesn't exist</h4>
        <Link href="/">Go back home</Link>
      </div>
    </Layout>
  );
}
