import AttendenceChart from '@/components/AttendenceChart'
import CountChart from '@/components/CountChart'
import UserCard from '@/components/UserCard'
import FinanceChart from '@/components/FinanceChart'
import EventCalendar from '@/components/EventCalendar'

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
      <div className="flex gap-4 justify-between flex-wrap">
        <UserCard type="student"/>
        <UserCard type="teacher"/>
        <UserCard type="parent"/>
        <UserCard type="staff"/>
      </div>
      <div className="flex gap-4 flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 h-[450px]">
          <CountChart />
        </div>
        <div className="w-full lg:w-2/3 h-[450px]">
          <AttendenceChart />
        </div>
      </div>
      <div className="w-full h-[500px]">
        <FinanceChart />
      </div>
      </div>
      <div className="w-full lg:w-1/3 flex lex-col gap-8">
        <EventCalendar />
      </div>
    </div>
  )
}

export default AdminPage