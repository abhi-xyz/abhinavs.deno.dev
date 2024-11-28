export default function Footer() {
  return (
    <>
      <footer class="text-center clear-both">
        <div>
          <br />
          <br />
          <div class="flex justify-center">
            <a
              class="p-2"
              href="https://github.com/abhi-xyz/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-github"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                </path>
              </svg>
            </a>
            <a class="p-2" href="mailto:abhinandhsuby@proton.me">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-mail"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                </path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
            <a class="p-2" href="/feed.atom" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-rss"
              >
                <path d="M4 11a9 9 0 0 1 9 9"></path>
                <path d="M4 4a16 16 0 0 1 16 16"></path>
                <circle cx="5" cy="19" r="1"></circle>
              </svg>
            </a>
            <a class="p-2" href="https://x.com/Ungraduate_Abhi" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-twitter"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
                </path>
              </svg>
            </a>
          </div>
          <p class="p-3">
            This site is built with the{" "}
            <a
              class="text-just-red"
              href="https://fresh.deno.dev"
            >
              Fresh
            </a>{" "}
            framework on Deno. The website’s source code is licensed under the
            {" "}
            <a
              class="text-just-red"
              href="https://opensource.org/license/mit"
            >
              MIT License
            </a>{" "}
            and is available{" "}
            <a
              class="text-just-red"
              href="https://github.com/abhi-xyz/abhinandhs.in"
            >
              here
            </a>. Articles are licensed under{" "}
            <a
              class="text-just-red"
              href="https://creativecommons.org/licenses/by-sa/4.0/deed.en"
            >
              Creative Commons
            </a>{" "}
            with the Share-alike Clause (CC-BY-SA 4.0).
          </p>
          <br />
          <br />
        </div>
      </footer>
    </>
  );
}