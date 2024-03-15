import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <section className='topbar'>
      <div className='flex-between py-4 px-5'>
      <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={130}
            height={325}
          />
        </Link>

      </div>
    </section>

  )
}

export default Topbar
