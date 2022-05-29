import { Facebook, Instagram, Twitter, Copyright } from '@mui/icons-material'

export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white h-[450px]'>
      <div className='flex flex-col gap-y-10 items-center p-4 mb-6'>
        <div className='text-center'>
          <h1 className='font-dancing text-4xl'>4CG</h1>
          <p className='font-playfair'>---</p>
          <p className='font-playfair'>Slogan</p>
        </div>
        <div className='text-center'>
          <p>Made By</p>
          <p>Pham Tang Thanh Phong <br /> Nguyen Ho Linh Dan <br /> Nguyen Thi Thuan Phoi <br /> Le Dinh Khoi</p>
        </div>
      </div>
      <div className='flex flex-col border-t-2 w-full pt-8 justify-center items-center gap-y-6 '>
        <div className='flex gap-4'>
          <Facebook></Facebook>
          <Instagram></Instagram>
          <Twitter></Twitter>
        </div>
        <div className='flex gap-x-2'>
          <Copyright></Copyright>
          <p>Copyrigth. All right reserved</p>
        </div>
      </div>
    </footer>
  );
}
