import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import LoginForm from "@/components/LoginForm/LoginForm";

export default function Home() {
  return (
    <main>
      <Button />

      <hr />

      <LoginForm />
    </main>
  );
}
