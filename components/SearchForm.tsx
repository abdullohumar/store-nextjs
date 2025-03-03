import React from 'react';
import Form from 'next/form';
import SearchFormReset from './SearchFormReset';
import { Search } from 'lucide-react';

const SearchForm = ({url}:{url?:string}) => {
return (
    <Form action='/' scroll={false} className='search-form'>
      <input
      name='query'
      defaultValue={url}
      className='search-input'
      placeholder='search what you need...'
      />
      <div className='flex gap-2'>
        {url && <SearchFormReset/>}
        <button type='submit' className='search-btn text-white'>
          <Search className='size-5'/>
        </button>
      </div>
    </Form>
  )
}

export default SearchForm