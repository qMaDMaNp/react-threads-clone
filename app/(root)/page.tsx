import { UserButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <main>
        <h1 className='head-text'>Home</h1>
      </main>
    </div>
  )
}