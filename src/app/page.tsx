import Menu from '@/components/Menu'
import Resource from '@/components/Resource'
export default function Home() {
  return (
    <div className="flex h-screen w-screen">
      <div className="min-w-48 min-h-full bg-blue-300">
        <Menu />
      </div>
      <div className="min-w-64 min-h-full bg-blue-200">
        <Resource />
      </div>
      <div className="flex flex-col flex-1 bg-blue-100">
        <div className="flex w-full min-h-[50%]">
          <div className="min-w-[80%]">top-1</div>
          <div>top-2</div>
        </div>
        <div>bottom</div>
      </div>
    </div>
  )
}
