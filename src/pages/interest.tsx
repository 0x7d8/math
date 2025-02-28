import { Card } from "@/components/ui/card"
import { useState } from "react"
import { parse, round, root } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export default function PageInterest() {
	const [end, setEnd] = useState<number>()
  const [base, setBase] = useState<number>()
  const [growth, setGrowth] = useState<number>()
  const [time, setTime] = useState<number>()
  const [steps, setSteps] = useState<string[]>([])
  const [doRound, setDoRound] = useState(true)

  const rIfOn = (value: number) => doRound ? round(value) : value

	const calculate = () => {
    if (base && growth && time && !end) {
      setEnd(rIfOn(base * growth ** time))

      setSteps([
        'end = base * growth ^ time',
        `end = ${base} * ${growth} ^ ${time} = ${rIfOn(base * growth ** time)}`
      ])
    } else if (base && growth && end && !time) {
      setTime(rIfOn(Math.log(end / base) / Math.log(growth)))

      setSteps([
        'end = base * growth ^ time',
        'end / base = growth ^ time',
        'log(end / base) = log(growth ^ time)',
        'log(end / base) = time * log(growth)',
        'time = log(end / base) / log(growth)',
        `time = log(${end} / ${base}) / log(${growth}) = ${rIfOn(Math.log(end / base) / Math.log(growth))}`
      ])
    } else if (base && time && end && !growth) {
      setGrowth(rIfOn(root(end / base, time)))

      setSteps([
        'end = base * growth ^ time',
        'end / base = growth ^ time',
        `${rIfOn(end / base)} = growth ^ ${time}`,
        `growth = root${time}(${rIfOn(end / base)}) = ${rIfOn(root(end / base, time))}`
      ])
    } else if (growth && time && end && !base) {
      setBase(rIfOn(end / (growth ** time)))

      setSteps([
        'end = base * growth ^ time',
        'end / (growth ^ time) = base',
        `base = ${end} / (${growth} ^ ${time}) = ${rIfOn(end / (growth ** time))}`
      ])
    }

    return
  }

	return (
		<div className={'flex flex-row justify-center items-center h-full'}>
			<Card className={'p-4 xl:w-3/4 xl:h-1/2 h-3/4 w-full relative'}>
        <div className={'flex flex-col w-full'}>
          <h1 className={'text-2xl font-semibold'}>Calculate Interest</h1>

          <form className={'flex flex-col xl:grid xl:grid-cols-4 gap-2 w-full mt-4 space-y-2'} onSubmit={(e) => {
            e.preventDefault()
            calculate()
          }}>
            <button type={'submit'} hidden>Calculate</button>

            <div className={'flex flex-row items-center'}>
              <p className={'w-28'}>end =</p>
              <Input type={'number'} placeholder={'end'} value={end ?? ''} onChange={(e) => setEnd(parse(e.target.value))} />
            </div>
            <div className={'flex flex-row items-center'}>
              <p className={'w-28'}>base =</p>
              <Input type={'number'} placeholder={'base'} value={base ?? ''} onChange={(e) => setBase(parse(e.target.value))} />
            </div>
            <div className={'flex flex-row items-center'}>
              <p className={'w-28'}>growth =</p>
              <Input type={'number'} placeholder={'growth'} value={growth ?? ''} onChange={(e) => setGrowth(parse(e.target.value))} />
            </div>
            <div className={'flex flex-row items-center'}>
              <p className={'w-28'}>time =</p>
              <Input type={'number'} placeholder={'time'} value={time ?? ''} onChange={(e) => setTime(parse(e.target.value))} />
            </div>
          </form>

          <div className={'w-full justify-between items-center flex flex-row mt-4'}>
            <div className={'flex flex-row items-center space-x-2'}>
              <Button onClick={calculate} disabled={Boolean(end && base && growth && time)}>
                Calculate
              </Button>

              <Button onClick={() => {
                setEnd(undefined)
                setBase(undefined)
                setGrowth(undefined)
                setTime(undefined)
                setSteps([])
              }} disabled={!end && !base && !growth && !time} variant={'outline'}>
                Clear
              </Button>
            </div>

            <div className={'hidden md:flex flex-row items-center'}>
              <Switch checked={doRound} onCheckedChange={(checked) => setDoRound(checked)} />
              <p className={'ml-2'}>Round</p>
            </div>
          </div>

          <code className={'text-sm p-2 mt-4'}>
            {steps.slice(0, 10).map((step, index) => (
              <p key={index}>{step}</p>
            ))}
          </code>
        </div>
			</Card>
		</div>
	)
}