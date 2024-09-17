export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full justify-center flex">
      <div className="max-w-1440 px-9 w-full"> {children}</div>
    </div>
  );
}
