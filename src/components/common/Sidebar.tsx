import { Navbar } from ".."

export const Sidebar = () => {
  return (
    <section className='bg-gray-200 p-4 min-w-[200px] max-w-[300px]'>
      <h1 className='text-5xl font-semibold mb-4'>Logo</h1>
      
      <Navbar />
    </section>
  )
}
