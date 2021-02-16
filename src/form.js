export default function Form({onCreateShoppingItem}) {

    function submitHandler(event) {
        event.preventDefault()
        const form = event.target
        const input = form.title
        onCreateShoppingItem(input.value)
        form.reset()
        input.focus()
    }

    return (
      <form onSubmit={submitHandler}>
          <h3>Set up your list</h3>
          <input name="title" type="text"  placeholder="Add stuff here"/>
          <button>add item</button>
      </form>
    )
  }