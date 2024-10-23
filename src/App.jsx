
import './App.css'
import Button from './componentes/Button'
import Image from './componentes/Image'
import Container from './componentes/Container'
import Menu from './componentes/Menu'
import Flex from './componentes/Flex'
import Logo from '../src/assets/Logo.png'
import Women from '../src/assets/Women.png'
import Net1 from '../src/assets/net1.png'
import Net2 from '../src/assets/net2.png'
import Model from '../src/assets/Model.png'
import SellImg1 from '../src/assets/sellimg1.png'
import SellImg2 from '../src/assets/sellimg2.png'
import Heading from './componentes/Heading'
import { IoStarSharp } from "react-icons/io5";
function App() {
  

  return (
    
    <>
    <div className='bg-BtnColor drop-shadow-2xl py-[100px]'>
      <div className="max-w-mainContainer mx-auto box-shadow-2xl">
    {/* Menu Part Start  */}

    <div className='bg-BannerColor pt-[10px] pb-[100px] rounded-lg '>
      <Container>
        <Flex className={'pt-[20px]'}>
          <div className='w-[15%]'>
            <Image ImageSrc={Logo}/>
          </div>
          <div className='w-[65%]'>
            <ul>
              <li>
            <Flex className={'justify-center gap-x-[60px]'}>
                  <Menu menuName={'Men'} className={'font-pop font-semibold text-2xl'}/>
                  <Menu menuName={'Woman'} className={'font-pop font-semibold text-2xl'}/>
                  <Menu menuName={'Kids'} className={'font-pop font-semibold text-2xl'}/>
                  <Menu menuName={'Collection'} className={'font-pop font-semibold text-2xl'}/>
                  <Menu menuName={'Trends'} className={'font-pop font-semibold text-2xl'}/>
                  
            </Flex>
            </li>
            </ul>
          </div>
          <div className='w-[20%] grid grid-cols-2 gap-4  place-content-center'>
      
            <Button btnText={'Login'} className={'border border-black hover:bg-BtnsColor rounded-lg px-3 py-1 mr-[15px] drop-shadow-xl '}/>
            <Button btnText={'Sign up'} className={'border border-black hover:bg-BtnsColor rounded-lg px-3 py-1 '}/>
            </div>
         
        </Flex>
    {/* Menu Part End  */}
    {/* Banner Part Start  */}
        <Flex className={'pt-[100px] place-content-center'}>
        <div className='w-[50%]'>
          <Heading as={'h1'} text={'Find The Best Fashion Style For You'} className='text-[64px] font-pop font-semibold pr-[120px]'/>
          <Heading as={'p'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra.'} className={'text-[24px] font-pop font-regular'}/>
          
          <Button btnText={'SHOP NOW'} className={'text-white bg-black py-2 px-8 rounded-lg mt-[50px]'}/>
        </div>
        <div className='w-[50%]'>
          <Image ImageSrc={Women}/>
        </div>
      </Flex>
      </Container>
    </div>
    {/* Banner Part End  */}

    {/* Collection Part Start  */}
    <div className='bg-white pt-[60px] pb-[110px]'>
      <Container>
        <Heading as={'h1'} text={'New Collection'} className={'text-center text-[64px] pb-[20px] font-pop font-semibold'}/>
        <Flex className={'justify-between'}>
          <div className='w-[30%]'>
          <div className='bg-cort pb-[50px] bg-no-repeat bg-center bg-cover'>
            
            <Button btnText={'Sweater'} className={'bg-white px-[120px] ml-[30px] rounded-lg py-1 mt-[400px]'}/>
            
          </div>
          </div>
          <div className='w-[30%]'>
            <div className='bg-cort2 pb-[50px] bg-no-repeat bg-center bg-cover'>
            <Button btnText={'Jeans'} className={'bg-white px-[120px] ml-[30px] rounded-lg py-1 mt-[400px]'}/>
            </div>
          </div>
          <div className='w-[30%]'>
            <div className='bg-cort3 pb-[50px] bg-no-repeat bg-center bg-cover'>
            <Button btnText={'Baskets'} className={'bg-white px-[120px] ml-[30px] rounded-lg py-1 mt-[400px]'}/>
            </div>
          </div>
        </Flex>

    {/* Collection Part End */}
    {/* Fashion Part Start */}
    <div className='relative '>
    <Image ImageSrc={Net1} className={'pt-[80px] mx-auto '}/>
    </div>
    <Flex>
      <div className='w-[50%] after:absolute mt-[-110px] z-10'>
        <Image ImageSrc={Model}/>
      </div>
      <div className='w-[50%] pl-[150px]'>
        <Heading as={'h1'} text={'Best Fashion Since 2010'} className='font-top font-bold text-[64px]'/>
        <Heading as={'p'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra.'} className={'text-[24px] font-pop font-semibold'}/>
      </div>
    </Flex>
    <div className='bg-fashionColor py-[60px] w-[793px] after:absolute ml-[550px] mt-[-60px] rounded-lg'>
      <Flex className={'justify-center'}>
        <div className='w-[33%] text-center relative after:absolute after:w-[3px] after:h-[110px] after:bg-slate-500 after:content" *:" after:left-[260px] after:top-[20px]'>
          <Heading as={'h1'} text={'2010+'} className='font-pop font-bold text-[64px]'/>
          <Heading as={'p'} text={'Founded'} className='font-pop font-semibold text-[24px]'/> 
        </div>
        <div className='w-[33%] text-center relative after:absolute after:w-[3px] after:h-[110px] after:bg-slate-500 after:content" *:" after:left-[260px] after:top-[20px]'>
        <Heading as={'h1'} text={'5000+'} className='font-pop font-bold text-[64px]'/>
        <Heading as={'p'} text={'Product Sold'} className='font-pop font-semibold text-[24px]'/> 
        </div>
        <div className='w-[33%] text-center '>
        <Heading as={'h1'} text={'4500+'} className='font-pop font-bold text-[64px]'/>
        <Heading as={'p'} text={'Best Reviews'} className='font-pop font-semibold text-[24px]'/> 
        </div>
      </Flex>
    </div>
    <Image ImageSrc={Net2} className={' ml-[190px] mt-[-40px] absolute'}/>
      </Container>
    </div>

    {/* Fashion Part End */}
    {/* Sell Part Start */}
    <div className='bg-SellColor pt-[60px] pb-[180px] relative rounded-br-lg rounded-bl-lg'>
      <Container>
      <Flex className={'justify-between gap-x-12'}>
        
        
        <div className='w-1/3'>
        <Heading as={'h1'} text={'Best Seller Product'} className='font-pop font-bold text-[64px]  text-white'/>
        <Heading as={'p'} text={' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus.'} className='font-pop font-semibold text-[24px] '/> 
              <Button btnText={'Learn MORE'} className={'font-pop font-semibold text-[24px] text-white bg-black py-3 px-12 mt-[50px] rounded-lg'}/>
        </div>
        
        <div className='w-1/3 pt-[30px]'>
          <Image ImageSrc={SellImg1}/>
          <div className='w-[90%] bg-white py-4 pl-[15px]'>
            <Flex>
            <IoStarSharp className='text-yellow-400 text-[25px]'/>
            <IoStarSharp className='text-yellow-400 text-[25px]'/>
            <IoStarSharp className='text-yellow-400 text-[25px]'/>
            <IoStarSharp className='text-yellow-400 text-[25px]'/>
            <IoStarSharp className='text-yellow-400 text-[25px]'/>
            
            </Flex>
            <Heading as={'h1'} text={'Sweater Shirt'} className='font-top font-semibold text-[22px]'/>
            <Flex className={'gap-x-[30px]'}>
            <Heading as={'p'} text={'$45.99'} className='text-slate-400 font-regular text-[24px] font-pop'/>
            <Heading as={'p'} text={'$35.99'} className='text-black font-regular text-[24px] font-pop'/>
            </Flex>
          </div>
        </div>
        <div className='w-1/3 pt-[30px]'>
           <Image ImageSrc={SellImg2}/>
          <div className='w-[90%] bg-white py-4 pl-[15px]'>
            <Flex>
            <IoStarSharp className='text-yellow-400 text-[25px]'/>
            <IoStarSharp className='text-yellow-400 text-[25px]'/>
            <IoStarSharp className='text-yellow-400 text-[25px]'/>
            <IoStarSharp className='text-yellow-400 text-[25px]'/>
            <IoStarSharp className='text-yellow-400 text-[25px]'/>
            </Flex>
            <Heading as={'h1'} text={'Pants fashion'} className='font-top font-semibold text-[22px]'/>
            <Flex className={'gap-x-[30px]'}>
            <Heading as={'p'} text={'$55'} className='text-slate-400 font-regular text-[24px] font-pop'/>
            <Heading as={'p'} text={'$44.99'} className='text-black font-regular text-[24px] font-pop'/>
            </Flex>
          </div>
        </div>
      </Flex>
      </Container>
    </div>
    {/* Sell Part End */}
    </div>
    </div>
    </>
  )
}

export default App



