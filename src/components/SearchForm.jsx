import toast from 'react-hot-toast';

export const SearchForm = ({onSearch, value}) => {

  const handleSubmit = e => {
    e.preventDefault();

    if (e.target.elements.searchQuery.value.trim() === '') {
      toast.error('Empty field!')
      return
    }
    onSearch(e.target.elements.searchQuery.value.trim())
    e.target.reset()
  }
  
  return (
    <form
      onSubmit={handleSubmit}>
      <input defaultValue={value} type="text" name="searchQuery" />
      <button type="submit">Search</button>
    </form>
  )
}