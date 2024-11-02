import Link from "next/link";
export default async function Dashboard() {
  return (
    <main className="m-5 ms:m-10 mt-0 md:mt-0 lg:m-20 lg:mt-0">
      <h1>Dashboard</h1>
      <Link href="create-video">Create Video</Link>
    </main>
  );
}
