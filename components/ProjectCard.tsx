import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const ProjectCard = ({post}:{post:ProjectTypeCard}) => {
  const {_createdAt, _id, views, author:{_id: authorId, name}, title, category, description, image} = post;
  return (
    <li className='project-card group'>
        <div className='flex-between'>
            <p className='project_card_date'>{formatDate(_createdAt)}</p>
            <div className='flex gap-1.5'>
              <EyeIcon className='size-6 text-primary'/>
              <span className='text-16-medium'>{views}</span>
            </div>
        </div>
        <div className='flex-between mt-5 gap-5'> 
          <div className='flex-1'>
            <Link href={`/user/${authorId}`}>
              <p className='text-16-medium line-clamp-1'>{name}</p>
            </Link>
            <Link href={`/project/${_id}`}>
              <h3 className='text-26-semibold line-clamp-1'>{title}</h3>
            </Link>
          </div>
          <Link href={`/user/${authorId}`}>
              <Image src='https://placehold.co/48x48' alt='placeholder' width={48} height={48} className='rounded-full'/>
            </Link>
        </div>
        <Link href={''}>
          <p className='project-card_desc'>{description}</p>
          <img src={image} alt='placeholder' className='project-card_img'/>
        </Link>
        <div className='flex-between gap-3 mt-5'>
          <Link href={`/?query=${category.toLowerCase()}`}>
            <p className='text-16-medium'>{category}</p>
          </Link>
          <Button className='project-card_btn' asChild>
            <Link href={`/project/${_id}`}>
              Details
            </Link>
          </Button>
        </div>
    </li>
  )
}

export default ProjectCard