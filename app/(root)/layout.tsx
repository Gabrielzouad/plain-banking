import MobileNav from '@/components/MobileNav';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstname: 'Gabriel', lastname: 'Munumel' };
  return (
    <main className='flex h-screen w-full font-inter'>
      <Sidebar
        user={{
          $id: '',
          email: '',
          userId: '',
          dwollaCustomerUrl: '',
          dwollaCustomerId: '',
          firstName: '',
          lastName: '',
          address1: '',
          city: '',
          state: '',
          postalCode: '',
          dateOfBirth: '',
          ssn: '',
        }}
      />
      <div className='flex size-full flex-col'>
        <div className='root-layout'>
          <Image src='/icons/logo.svg' width={30} height={30} alt='Logo' />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
