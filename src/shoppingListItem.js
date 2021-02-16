export default function shoppingListItem({ title, isDone = false, onToggleItem }) {
  return (
    <lable>
      <input type="checkbox" checked={isDone} onChange={onToggleItem}/> {title}
    </lable>
  );
}