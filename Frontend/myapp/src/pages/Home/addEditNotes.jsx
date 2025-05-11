import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
import TagInput from '../../components/Input/TagInput'

const AddEditNotes = ({ onClose , noteData , type}) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState([])
  const [error, setError] = useState(null)

  //EDIT NOTES
  const editNote = async () => {

  }

  //ADD NOTES

  const addNewNote = async()=>{}


  const handleAddNotes = () => {
    if (!title) {
      setError("Please enter the Title")
      return
    }
    if (!content) {
      setError("Please enter the Content")
      return
    }


    if (type === "edit") {
      editNote()
    }else{
      addNewNote()
    }
    setError("")
  }

  return (
    <div className='relative'>
      <button onClick={onClose} className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50'>
        <MdClose className='text-xl text-slate-400' />
      </button>

      <div className='flex flex-col gap-2'>
        <label className='input-label text-red-400 uppercase'>Title</label>
        <input
          type="text"
          className='text-2xl text-slate-950 outline-none'
          placeholder='Wake up at 6 a.m.'
          value={title}
          onChange={({ target }) => { setTitle(target.value) }}
        />
      </div>

      <div className='flex flex-col gap-2 mt-4'>
        <label className='input-label text-red-400 uppercase'>Content</label>

        <textarea
          type="text"
          className='text-sm text-slate-950 bg-slate-50 p-2  rounded outline-none'
          placeholder='Content...'
          rows={10}
          value={content}
          onChange={({ target }) => { setContent(target.value) }}
          />
      </div>

      <div className='mt-3'>
        <label className='input-label text-red-400 uppercase '>Tags</label>
        <TagInput tags={tags} setTags={setTags}/>
      </div>

    {error && <p className='text-red-500 text-xs pt-4 '>
      {error}
    </p> }

      <button className='btn-primary font-medium mt-5 p-3  ' onClick={handleAddNotes}>ADD</button>

    </div>
  )
}

export default AddEditNotes
