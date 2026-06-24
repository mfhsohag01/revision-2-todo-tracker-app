export default function Footer() {
  return (
    <footer
      className="py-6 md:py-8"
      style={{
        background: "rgba(15, 17, 26, 0.6)",
        backdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="container mx-auto">
        <p className="text-center text-xs text-[#6A6A6A] lg:text-sm">
          Copyright ©2024 | All rights reserved by Learn with Sumit
        </p>
      </div>
    </footer>
  );
}
