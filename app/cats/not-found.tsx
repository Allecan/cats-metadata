import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find the requested cat</p>
      <Link href="/cats">Return to Cats</Link>
    </div>
  );
}
