import { InlineSnippet } from "@/components/form/domain-configuration";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <style jsx global>
      .parent {
        display: grid;
          grid-template: auto 1fr auto / auto 1fr auto;
          }
      </style>
        <div className="parent">
          <header className="section coral">Header</header>
            <div className="left-side section blue">Left Sidebar</div>
            <main className="section green">
              <div className="flex h-screen flex-col items-center justify-center space-y-10 bg-black">
                  <Image
                    width={512}
                    height={512}
                    src="/logo.png"
                    alt="Platforms on Vercel"
                    className="w-48"
                  />
                </div>
            </main>
            <div class="right-side section yellow">Right Sidebar</div>
          <footer class="section coral">Footer</footer>
        </div>
    </div>
  );
}