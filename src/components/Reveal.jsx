export default function Reveal({ as: Tag = "div", className = "", children }) {
  return <Tag className={`reveal ${className}`.trim()}>{children}</Tag>;
}
