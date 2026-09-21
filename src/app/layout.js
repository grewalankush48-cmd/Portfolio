import './global.css';

export const metadata = {
  title: 'Ankush Grewal - Portfolio',
  description: 'Cybersecurity Student & Python Developer'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
