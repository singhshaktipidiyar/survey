import * as React from 'react'
import Link from 'next/link'

export default async function DashboardPage() {

  return (
    <div className="flex h-[calc(100vh-theme(spacing.16))]"> {/* items-center justify-center py-10 */}
        <div className='border-r xl:w-[100px] h-full dark:bg-zinc-950'>
           <ul className='p-2 h-full flex-col flex'>
              <Link href='#' className='border p-2 rounded-md text-sm font-medium mb-auto text-center hover:bg-zinc-200/40 dark:hover:bg-zinc-300/10'> My projects </Link>
              <Link href='#' className='border p-2 rounded-md text-sm font-medium mb-2 text-center hover:bg-zinc-200/40 dark:hover:bg-zinc-300/10'> Settings </Link>
              <Link href='#' className='border p-2 rounded-md text-sm font-medium mb-2 text-center hover:bg-zinc-200/40 dark:hover:bg-zinc-300/10'> My account </Link>
              <Link href='#' className='border p-2 rounded-md text-sm font-medium text-center hover:bg-zinc-200/40 dark:hover:bg-zinc-300/10'> Help? </Link>
           </ul>
        </div>
        {/*  */}
        <div className='dashboard-content-block w-full p-10 peer border-r bg-muted h-full dark:bg-zinc-950'>
            <div className='first_tab'>
              <ul className='w-full flex items-center'>
                <li className='mr-2'><a href='#' className='active block tabs border px-5 py-2 rounded-md text-sm font-medium mb-2 text-center hover:text-accent-foreground hover:bg-zinc-200/40 dark:hover:bg-zinc-300/10'> Admin</a> </li>
                <li className='mr-2'><a href='#' className='block tabs border px-5 py-2 rounded-md text-sm font-medium mb-2 text-center hover:text-accent-foreground hover:bg-zinc-200/40 dark:hover:bg-zinc-300/10'> Analytics </a> </li>
              </ul>
            </div>
            <div className='second_tab mt-3'>
              <ul className='w-full flex items-center'>
                <li className='mr-2'><a href='#' className='active block tabs  border px-5 py-2 rounded-md text-sm font-medium mb-2 text-center hover:text-accent-foreground hover:bg-zinc-200/40 dark:hover:bg-zinc-300/10'> Project quetion & Context</a></li>
                <li className='mr-2'><a href='#' className='block tabs border px-5 py-2 rounded-md text-sm font-medium mb-2 text-center hover:text-accent-foreground hover:bg-zinc-200/40 dark:hover:bg-zinc-300/10'> Interviewer style </a></li>
                <li className='mr-2'><a href='#' className='block tabs border px-5 py-2 rounded-md text-sm font-medium mb-2 text-centerhover:text-accent-foreground hover:bg-zinc-200/40 dark:hover:bg-zinc-300/10'> Share & distribute </a></li>
              </ul>
            </div>

            {/*  */}

            {/*  */}

            <div className='tab-content-block mt-3'>
              <div className='tab-content-first p-2'>
                  <h1 className='content h-20 border flex items-center justify-center rounded-md font-medium p-2 mb-2 bg-zinc-200/40 dark:bg-zinc-300/10 w-full'> General context of the project </h1>
                  <div className='content'>
                      <textarea className="border rounded-md min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm" ></textarea>
                  </div>
                </div>
                {/*  */}

                <div className='tab-content-first p-2'>
                  <h1 className='content h-16 border flex items-center justify-center rounded-md font-medium p-2 mb-2 bg-zinc-200/40 dark:bg-zinc-300/10 w-full'> Interview Quetions </h1>

                  <div className='interview-que-block mb-2'>
                      <div className='questionblock flex mb-2'>
                          <div className='content h-16 border flex items-center rounded-md font-medium p-2 mr-2 bg-zinc-200/40 dark:bg-zinc-300/10 w-1/6'> Question 1: </div>
                          <div className='w-5/6'><input className='bg-transparent h-16 border text-center rounded-md font-medium p-2 w-full focus-within:outline-none sm:text-sm' placeholder=''  type='text' defaultValue="What do you love most about AI voice interactions?" />  </div>
                      </div>
                      <div className='answerblock flex mb-2'>
                          <div className='content h-16 border flex items-center rounded-md font-medium p-2 mr-2 bg-zinc-200/40 dark:bg-zinc-300/10 w-1/6'> Context </div>
                          <div className='w-5/6'><input className='bg-transparent h-16 border text-center rounded-md font-medium p-2 w-full focus-within:outline-none sm:text-sm' placeholder='' type='text' /></div>
                      </div>
                  </div>
                  {/*  */}
                  <div className='interview-que-block mb-2'>
                      <div className='questionblock flex mb-2'>
                          <div className='content h-16 border flex items-center rounded-md font-medium p-2 bg-zinc-200/40 dark:bg-zinc-300/10 w-1/6 mr-2'> Question 1: </div>
                          <div className='w-5/6'><input className='bg-transparent h-16 w-full border text-center rounded-md font-medium p-2 focus-within:outline-none sm:text-sm' placeholder='' type='text' defaultValue="Do you think to gain massive research efficiencies by using a conversational AI?" /></div>  
                      </div>
                      <div className='answerblock flex mb-2'>
                          <div className='content h-16 border flex items-center rounded-md font-medium p-2 bg-zinc-200/40 dark:bg-zinc-300/10 w-1/6 mr-2'> Context </div>
                          <div className='w-5/6'><input className='bg-transparent h-16 border text-center rounded-md font-medium p-2 w-full focus-within:outline-none sm:text-sm' placeholder='' type='text' /> </div>
                      </div>
                  </div>

                </div>

            </div>

        </div>

        

    </div>
  )
}
