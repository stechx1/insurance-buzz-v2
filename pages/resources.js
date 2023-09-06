import { Anchor, Collapse } from 'antd';
import { lifeInsuranceItems } from '@/data/faqs/life-insurance';
import { travelInsuranceItems } from '@/data/faqs/travel-insurance';

const ResourcesPage = () => {
  return (
    <div className='bg-[#305fa9] relative top-[-165px]'>
      <div className='grid grid-cols-6'>
        <div>
          <Anchor
            offsetTop={150}
            style={{ background: '', height: '100vh', paddingTop: '40px' }}
            replace
            items={[
              {
                key: 'life-insurance',
                href: '#life-insurance',
                title: 'Life Insurance',
              },
              {
                key: 'travel-insurance',
                href: '#travel-insurance',
                title: 'Travel Insurance',
              },
              {
                key: 'Term Insurance',
                href: '#term-insurance',
                title: 'Term Insurance',
              },
              {
                key: 'disability-insurance',
                href: '#disability-insurance',
                title: 'Disability Insurance',
              },
              {
                key: 'claim-insurance',
                href: '#claim-insurance',
                title: 'Claim Insurance',
              },
              {
                key: 'critical-insurance',
                href: '#critical-insurance',
                title: 'Critical Illness Insurance',
              },
            ]}
          />
        </div>

        <div className='col-span-5 pt-[180px] container mr-20'>
          {/*  */}
          <div
            className='p-4'
            id='life-insurance'
            style={{ minHeight: '100vh', background: '#305fa9' }}
          >
            <h1 className='text-white font-bold text-3xl'>
              Life Insurance FAQs
            </h1>
            <Collapse
              ghost
              items={lifeInsuranceItems}
              defaultActiveKey={['1']}
            />
          </div>
          <div
            className='p-4'
            id='travel-insurance'
            style={{ minHeight: '100vh', background: '#9ab88c' }}
          >
            <h1 className='text-white font-bold text-3xl'>
              Travel Insurance FAQs
            </h1>
            <Collapse
              ghost
              items={travelInsuranceItems}
              defaultActiveKey={['1']}
            />
          </div>
          <div
            id='term-insurance'
            className='p-4'
            style={{ minHeight: '100vh', background: '#ed8b08' }}
          >
            <h1 className='text-white font-bold text-3xl'>
              Term Insurance FAQs
            </h1>
            <Collapse
              ghost
              items={lifeInsuranceItems}
              defaultActiveKey={['1']}
            />
          </div>
          <div
            id='disability-insurance'
            className='p-4'
            style={{ minHeight: '100vh', background: '#6f909e' }}
          >
            <h1 className='text-white font-bold text-3xl'>
              Disability Insurance FAQs
            </h1>
            <Collapse
              ghost
              items={lifeInsuranceItems}
              defaultActiveKey={['1']}
            />
          </div>
          <div
            id='claim-insurance'
            className='p-4'
            style={{ minHeight: '100vh', background: '#a94342' }}
          >
            <h1 className='text-white font-bold text-3xl'>
              Claim Insurance FAQs
            </h1>
            <Collapse
              ghost
              items={lifeInsuranceItems}
              defaultActiveKey={['1']}
            />
          </div>
          <div
            id='critical-insurance'
            className='p-4'
            style={{ height: '100vh', background: '#308b84' }}
          >
            <h1 className='text-white font-bold text-3xl'>
              Critical Illness Insurance FAQs
            </h1>
          </div>
          <div id='part-3' style={{ height: '100vh', background: '#61b1bc' }} />
          <div id='part-3' style={{ height: '100vh', background: '#8a7ec3' }} />
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
