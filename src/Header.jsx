import LWSLogo from "./assets/lws-logo-en.svg";

export default function Header() {
  return (
    <nav
      className="px-8 md:py-8 fixed top-0 w-full z-50"
      style={{
        background: "rgba(15, 17, 26, 0.6)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-x-6">
        <a href="/">
          <img className="h-[45px]" src={LWSLogo} alt="Lws" />
        </a>
      </div>
    </nav>
  );
}
