export default function AuthLayout({ title, children }) {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  )
}
