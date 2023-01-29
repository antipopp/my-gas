import AppBar from "../AppBar/AppBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col bg-secondary">
      <header className="flex-shrink-0">
        <AppBar />
      </header>
      <main className="flex-grow">
        <div className="container mx-auto px-4">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
