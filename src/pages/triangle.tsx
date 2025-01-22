import { Card } from "@/components/ui/card"
import DraggableTriangle from "@/components/draggable-triangle"
import { useState } from "react"
import { number } from "@rjweb/utils"
import { is, parse, round } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function PageTriangle() {
	const [a, setA] = useState<number>()
  const [b, setB] = useState<number>()
  const [c, setC] = useState<number>()
  const [aDegrees, setADegrees] = useState<number>()
  const [bDegrees, setBDegrees] = useState<number>()
  const [cDegrees, setCDegrees] = useState<number>()
  const [steps, setSteps] = useState<string[]>([])

	const calculate = () => {
    const is90Degrees = is(aDegrees, 90) ? 'a' : is(bDegrees, 90) ? 'b' : is(cDegrees, 90) ? 'c' : null
    const hypotenuse = is90Degrees === 'a' ? a : is90Degrees === 'b' ? b : is90Degrees === 'c' ? c : null,
      hypothenuseName = is90Degrees === 'a' ? 'a' : is90Degrees === 'b' ? 'b' : is90Degrees === 'c' ? 'c' : null

		console.log('Before:', { a, b, c, aDegrees, bDegrees, cDegrees, hypotenuse, hypothenuseName })

    if (a && b && c && (!aDegrees || !bDegrees || !cDegrees)) {
      if (!aDegrees) {
        setADegrees(round(number.toDegrees(Math.acos((b ** 2 + c ** 2 - a ** 2) / (2 * b * c)))))

        setSteps((old) => [
          ...old,
          `α° = cos⁻¹((b² + c² - a²) / 2bc) = ${round(number.toDegrees(Math.acos((b ** 2 + c ** 2 - a ** 2) / (2 * b * c))))}`
        ])
      } else if (!bDegrees) {
        setBDegrees(round(number.toDegrees(Math.acos((a ** 2 + c ** 2 - b ** 2) / (2 * a * c)))))

        setSteps((old) => [
          ...old,
          `β° = cos⁻¹((a² + c² - b²) / 2ac) = ${round(number.toDegrees(Math.acos((a ** 2 + c ** 2 - b ** 2) / (2 * a * c))))}`
        ])
      } else if (!cDegrees) {
        setCDegrees(round(number.toDegrees(Math.acos((a ** 2 + b ** 2 - c ** 2) / (2 * a * b)))))

        setSteps((old) => [
          ...old,
          `γ° = cos⁻¹((a² + b² - c²) / 2ab) = ${round(number.toDegrees(Math.acos((a ** 2 + b ** 2 - c ** 2) / (2 * a * b))))}`
        ])
      }

      return
    } else if (is90Degrees === 'a' && a && b && hypotenuse && !c) {
      setC(round(Math.sqrt(hypotenuse ** 2 - b ** 2)))

      setSteps((old) => [
        ...old,
        `c = sqrt(${hypotenuse}² - ${b}²) = ${round(Math.sqrt(hypotenuse ** 2 - b ** 2))}`
      ])
      return
    } else if (is90Degrees === 'b' && a && b && hypotenuse && !c) {
      setC(round(Math.sqrt(hypotenuse ** 2 - a ** 2)))

      setSteps((old) => [
        ...old,
        `c = sqrt(${hypotenuse}² - ${a}²) = ${round(Math.sqrt(hypotenuse ** 2 - a ** 2))}`
      ])
      return
    } else if (is90Degrees === 'c' && a && b && hypotenuse && !c) {
      setC(round(Math.sqrt(a ** 2 + b ** 2)))

      setSteps((old) => [
        ...old,
        `c = sqrt(${a}² + ${b}²) = ${round(Math.sqrt(a ** 2 + b ** 2))}`
      ])
      return
    } else if (is90Degrees === 'a' && a && c && hypotenuse && !b) {
      setB(round(Math.sqrt(hypotenuse ** 2 - c ** 2)))

      setSteps((old) => [
        ...old,
        `b = sqrt(${hypotenuse}² - ${c}²) = ${round(Math.sqrt(hypotenuse ** 2 - c ** 2))}`
      ])
      return
    } else if (is90Degrees === 'b' && b && c && hypotenuse && !a) {
      setA(round(Math.sqrt(hypotenuse ** 2 - c ** 2)))

      setSteps((old) => [
        ...old,
        `a = sqrt(${hypotenuse}² - ${c}²) = ${round(Math.sqrt(hypotenuse ** 2 - c ** 2))}`
      ])
      return
    } else if (is90Degrees === 'c' && a && c && hypotenuse && !b) {
      setB(round(Math.sqrt(hypotenuse ** 2 - a ** 2)))

      setSteps((old) => [
        ...old,
        `b = sqrt(${hypotenuse}² - ${a}²) = ${round(Math.sqrt(hypotenuse ** 2 - a ** 2))}`
      ])
      return
    } else if (is90Degrees === 'a' && b && c && hypotenuse && !a) {
      setA(round(Math.sqrt(hypotenuse ** 2 - b ** 2)))

      setSteps((old) => [
        ...old,
        `a = sqrt(${hypotenuse}² - ${b}²) = ${round(Math.sqrt(hypotenuse ** 2 - b ** 2))}`
      ])
      return
    } else if (is90Degrees === 'b' && a && c && hypotenuse && !b) {
      setB(round(Math.sqrt(hypotenuse ** 2 - a ** 2)))

      setSteps((old) => [
        ...old,
        `b = sqrt(${hypotenuse}² - ${a}²) = ${round(Math.sqrt(hypotenuse ** 2 - a ** 2))}`
      ])
      return
    } else if (is90Degrees === 'c' && a && b && hypotenuse && !c) {
      setA(round(Math.sqrt(hypotenuse ** 2 - b ** 2)))

      setSteps((old) => [
        ...old,
        `a = sqrt(${hypotenuse}² - ${b}²) = ${round(Math.sqrt(hypotenuse ** 2 - b ** 2))}`
      ])
      return
    } else if (is90Degrees === 'c' && b && c && hypotenuse && !a) {
      setA(round(Math.sqrt(hypotenuse ** 2 - b ** 2)))

      setSteps((old) => [
        ...old,
        `a = sqrt(${hypotenuse}² - ${b}²) = ${round(Math.sqrt(hypotenuse ** 2 - b ** 2))}`
      ])
      return
    } else if (is90Degrees === 'b' && a && c && hypotenuse && !b) {
      setB(round(Math.sqrt(hypotenuse ** 2 - a ** 2)))

      setSteps((old) => [
        ...old,
        `b = sqrt(${hypotenuse}² - ${a}²) = ${round(Math.sqrt(hypotenuse ** 2 - a ** 2))}`
      ])
      return
    } else if (is90Degrees === 'a' && a && b && hypotenuse && !c) {
      setC(round(Math.sqrt(hypotenuse ** 2 - b ** 2)))

      setSteps((old) => [
        ...old,
        `c = sqrt(${hypotenuse}² - ${b}²) = ${round(Math.sqrt(hypotenuse ** 2 - b ** 2))}`
      ])
      return
    }

    else if (aDegrees && bDegrees && !cDegrees) {
      setCDegrees(round(180 - aDegrees - bDegrees))

      setSteps((old) => [
        ...old,
        `γ° = 180 - ${aDegrees} - ${bDegrees} = ${round(180 - aDegrees - bDegrees)}`
      ])
      return
    } else if (aDegrees && cDegrees && !bDegrees) {
      setBDegrees(round(180 - aDegrees - cDegrees))

      setSteps((old) => [
        ...old,
        `β° = 180 - ${aDegrees} - ${cDegrees} = ${round(180 - aDegrees - cDegrees)}`
      ])
      return
    } else if (bDegrees && cDegrees && !aDegrees) {
      setADegrees(round(180 - bDegrees - cDegrees))

      setSteps((old) => [
        ...old,
        `α° = 180 - ${bDegrees} - ${cDegrees} = ${round(180 - bDegrees - cDegrees)}`
      ])
      return
    }

    else if (hypothenuseName && !hypotenuse && aDegrees && bDegrees && cDegrees) {
      if (hypothenuseName === 'c' && a) {
        setC(round(a / Math.sin(number.toRadians(aDegrees))))

        setSteps((old) => [
          ...old,
          `c = ${a} / sin(${aDegrees}) = ${round(a / Math.sin(number.toRadians(aDegrees)))}`
        ])
      } else if (hypothenuseName === 'c' && b) {
        setC(round(b / Math.sin(number.toRadians(bDegrees))))

        setSteps((old) => [
          ...old,
          `c = ${b} / sin(${bDegrees}) = ${round(b / Math.sin(number.toRadians(bDegrees)))}`
        ])
      } else if (hypothenuseName === 'b' && a) {
        setB(round(a / Math.sin(number.toRadians(aDegrees))))

        setSteps((old) => [
          ...old,
          `b = ${a} / sin(${aDegrees}) = ${round(a / Math.sin(number.toRadians(aDegrees)))}`
        ])
      } else if (hypothenuseName === 'b' && c) {
        setB(round(c / Math.sin(number.toRadians(cDegrees))))

        setSteps((old) => [
          ...old,
          `b = ${c} / sin(${cDegrees}) = ${round(c / Math.sin(number.toRadians(cDegrees)))}`
        ])
      } else if (hypothenuseName === 'a' && b) {
        setA(round(b / Math.sin(number.toRadians(bDegrees))))

        setSteps((old) => [
          ...old,
          `a = ${b} / sin(${bDegrees}) = ${round(b / Math.sin(number.toRadians(bDegrees)))}`
        ])
      } else if (hypothenuseName === 'a' && c) {
        setA(round(c / Math.sin(number.toRadians(cDegrees))))

        setSteps((old) => [
          ...old,
          `a = ${c} / sin(${cDegrees}) = ${round(c / Math.sin(number.toRadians(cDegrees)))}`
        ])
      }

      return
    } else if (hypotenuse && hypothenuseName && aDegrees && bDegrees && cDegrees) {
      if (hypothenuseName === 'c' && !a && !b) {
        setA(round(hypotenuse * Math.sin(number.toRadians(aDegrees))))
        setB(round(hypotenuse * Math.sin(number.toRadians(bDegrees))))

        setSteps((old) => [
          ...old,
          `a = ${hypotenuse} * sin(${aDegrees}) = ${round(hypotenuse * Math.sin(number.toRadians(aDegrees)))}`,
          `b = ${hypotenuse} * sin(${bDegrees}) = ${round(hypotenuse * Math.sin(number.toRadians(bDegrees)))}`
        ])
      } else if (hypothenuseName === 'b' && !a && !c) {
        setA(round(hypotenuse * Math.sin(number.toRadians(aDegrees))))
        setC(round(hypotenuse * Math.sin(number.toRadians(cDegrees))))

        setSteps((old) => [
          ...old,
          `a = ${hypotenuse} * sin(${aDegrees}) = ${round(hypotenuse * Math.sin(number.toRadians(aDegrees)))}`,
          `c = ${hypotenuse} * sin(${cDegrees}) = ${round(hypotenuse * Math.sin(number.toRadians(cDegrees)))}`
        ])
      } else if (hypothenuseName === 'a' && !b && !c) {
        setB(round(hypotenuse * Math.sin(number.toRadians(bDegrees))))
        setC(round(hypotenuse * Math.sin(number.toRadians(cDegrees))))

        setSteps((old) => [
          ...old,
          `b = ${hypotenuse} * sin(${bDegrees}) = ${round(hypotenuse * Math.sin(number.toRadians(bDegrees)))}`,
          `c = ${hypotenuse} * sin(${cDegrees}) = ${round(hypotenuse * Math.sin(number.toRadians(cDegrees)))}`
        ])
      }

      return
    }

    else if (a && b && c && (!aDegrees || !bDegrees || !cDegrees)) {
      setADegrees(round(number.toDegrees(Math.acos((b ** 2 + c ** 2 - a ** 2) / (2 * b * c)))))
      setBDegrees(round(number.toDegrees(Math.acos((a ** 2 + c ** 2 - b ** 2) / (2 * a * c)))))
      setCDegrees(round(number.toDegrees(Math.acos((a ** 2 + b ** 2 - c ** 2) / (2 * a * b)))))

      setSteps((old) => [
        ...old,
        `α° = cos⁻¹((b² + c² - a²) / 2bc) = ${round(number.toDegrees(Math.acos((b ** 2 + c ** 2 - a ** 2) / (2 * b * c))))}`,
        `β° = cos⁻¹((a² + c² - b²) / 2ac) = ${round(number.toDegrees(Math.acos((a ** 2 + c ** 2 - b ** 2) / (2 * a * c))))}`,
        `γ° = cos⁻¹((a² + b² - c²) / 2ab) = ${round(number.toDegrees(Math.acos((a ** 2 + b ** 2 - c ** 2) / (2 * a * b))))}`
      ])
      return
    }

		// law of sines
		else if (a && b && aDegrees && !bDegrees) {
			setBDegrees(round(number.toDegrees(Math.asin(b * Math.sin(number.toRadians(aDegrees)) / a))))

			setSteps((old) => [
				...old,
				`β° = sin⁻¹(b * sin(α°) / a) = ${round(number.toDegrees(Math.asin(b * Math.sin(number.toRadians(aDegrees)) / a)))}`
			])
			return
		} else if (a && b && bDegrees && !aDegrees) {
			setADegrees(round(number.toDegrees(Math.asin(a * Math.sin(number.toRadians(bDegrees)) / b))))

			setSteps((old) => [
				...old,
				`α° = sin⁻¹(a * sin(β°) / b) = ${round(number.toDegrees(Math.asin(a * Math.sin(number.toRadians(bDegrees)) / b)))}`
			])
			return
		} else if (a && c && aDegrees && !cDegrees) {
			setCDegrees(round(number.toDegrees(Math.asin(c * Math.sin(number.toRadians(aDegrees)) / a))))

			setSteps((old) => [
				...old,
				`γ° = sin⁻¹(c * sin(α°) / a) = ${round(number.toDegrees(Math.asin(c * Math.sin(number.toRadians(aDegrees)) / a)))}`
			])
			return
		} else if (a && c && cDegrees && !aDegrees) {
			setADegrees(round(number.toDegrees(Math.asin(a * Math.sin(number.toRadians(cDegrees)) / c))))

			setSteps((old) => [
				...old,
				`α° = sin⁻¹(a * sin(γ°) / c) = ${round(number.toDegrees(Math.asin(a * Math.sin(number.toRadians(cDegrees)) / c)))}`
			])
			return
		} else if (b && c && bDegrees && !cDegrees) {
			setCDegrees(round(number.toDegrees(Math.asin(c * Math.sin(number.toRadians(bDegrees)) / b))))

			setSteps((old) => [
				...old,
				`γ° = sin⁻¹(c * sin(β°) / b) = ${round(number.toDegrees(Math.asin(c * Math.sin(number.toRadians(bDegrees)) / b)))}`
			])
			return
		} else if (b && c && cDegrees && !bDegrees) {
			setBDegrees(round(number.toDegrees(Math.asin(b * Math.sin(number.toRadians(cDegrees)) / c))))

			setSteps((old) => [
				...old,
				`β° = sin⁻¹(b * sin(γ°) / c) = ${round(number.toDegrees(Math.asin(b * Math.sin(number.toRadians(cDegrees)) / c)))}`
			])
			return
		}

		// if pythagorean theorem fails (due to not having 90° anywhere), calculate missing sides using angles
    else if (!a && b && c && aDegrees && bDegrees && cDegrees) {
      setA(round((b * Math.sin(number.toRadians(aDegrees))) / Math.sin(number.toRadians(bDegrees))))
      
      setSteps((old) => [
        ...old,
        `a = (${b} * sin(${aDegrees})) / sin(${bDegrees}) = ${round((b * Math.sin(number.toRadians(aDegrees))) / Math.sin(number.toRadians(bDegrees)))}`
      ])
      return
    } else if (a && !b && c && aDegrees && bDegrees && cDegrees) {
      setB(round((a * Math.sin(number.toRadians(bDegrees))) / Math.sin(number.toRadians(aDegrees))))
      
      setSteps((old) => [
        ...old,
        `b = (${a} * sin(${bDegrees})) / sin(${aDegrees}) = ${round((a * Math.sin(number.toRadians(bDegrees))) / Math.sin(number.toRadians(aDegrees)))}`
      ])
      return
    } else if (a && b && !c && aDegrees && bDegrees && cDegrees) {
      setC(round((a * Math.sin(number.toRadians(cDegrees))) / Math.sin(number.toRadians(aDegrees))))
      
      setSteps((old) => [
        ...old,
        `c = (${a} * sin(${cDegrees})) / sin(${aDegrees}) = ${round((a * Math.sin(number.toRadians(cDegrees))) / Math.sin(number.toRadians(aDegrees)))}`
      ])
      return
    } else if (!a && b && !c && aDegrees && bDegrees && cDegrees) {
      setA(round((b * Math.sin(number.toRadians(aDegrees))) / Math.sin(number.toRadians(bDegrees))))
      setC(round((b * Math.sin(number.toRadians(cDegrees))) / Math.sin(number.toRadians(bDegrees))))
      
      setSteps((old) => [
        ...old,
        `a = (${b} * sin(${aDegrees})) / sin(${bDegrees}) = ${round((b * Math.sin(number.toRadians(aDegrees))) / Math.sin(number.toRadians(bDegrees)))}`,
        `c = (${b} * sin(${cDegrees})) / sin(${bDegrees}) = ${round((b * Math.sin(number.toRadians(cDegrees))) / Math.sin(number.toRadians(bDegrees)))}`
      ])
      return
    } else if (!a && !b && c && aDegrees && bDegrees && cDegrees) {
      setA(round((c * Math.sin(number.toRadians(aDegrees))) / Math.sin(number.toRadians(cDegrees))))
      setB(round((c * Math.sin(number.toRadians(bDegrees))) / Math.sin(number.toRadians(cDegrees))))
      
      setSteps((old) => [
        ...old,
        `a = (${c} * sin(${aDegrees})) / sin(${cDegrees}) = ${round((c * Math.sin(number.toRadians(aDegrees))) / Math.sin(number.toRadians(cDegrees)))}`,
        `b = (${c} * sin(${bDegrees})) / sin(${cDegrees}) = ${round((c * Math.sin(number.toRadians(bDegrees))) / Math.sin(number.toRadians(cDegrees)))}`
      ])
      return
    } else if (a && !b && !c && aDegrees && bDegrees && cDegrees) {
      setB(round((a * Math.sin(number.toRadians(bDegrees))) / Math.sin(number.toRadians(aDegrees))))
      setC(round((a * Math.sin(number.toRadians(cDegrees))) / Math.sin(number.toRadians(aDegrees))))
      
      setSteps((old) => [
        ...old,
        `b = (${a} * sin(${bDegrees})) / sin(${aDegrees}) = ${round((a * Math.sin(number.toRadians(bDegrees))) / Math.sin(number.toRadians(aDegrees)))}`,
        `c = (${a} * sin(${cDegrees})) / sin(${aDegrees}) = ${round((a * Math.sin(number.toRadians(cDegrees))) / Math.sin(number.toRadians(aDegrees)))}`
      ])
      return
    }

    console.log('After:', { a, b, c, aDegrees, bDegrees, cDegrees, hypotenuse, hypothenuseName })
  }

	return (
		<div className={'flex flex-row justify-center items-center h-full'}>
			<Card className={'p-4 md:w-3/4 md:h-1/2 h-full w-full relative'}>
				<h1 className={'text-2xl font-semibold'}>Calculate Triangle</h1>

				<div className={'hidden lg:inline absolute -top-10 right-0 h-[400px] w-[400px]'}>
					<DraggableTriangle />
				</div>

				<div className={'flex flex-col w-1/2 mt-4 space-y-2'}>
					<div className={'flex flex-row items-center'}>
						<p className={'w-12'}>a =</p>
						<Input type={'number'} placeholder={'a'} value={a ?? ''} onChange={(e) => setA(parse(e.target.value))} />
					</div>
					<div className={'flex flex-row items-center'}>
						<p className={'w-12'}>b =</p>
						<Input type={'number'} placeholder={'b'} value={b ?? ''} onChange={(e) => setB(parse(e.target.value))} />
					</div>
					<div className={'flex flex-row items-center'}>
						<p className={'w-12'}>c =</p>
						<Input type={'number'} placeholder={'c'} value={c ?? ''} onChange={(e) => setC(parse(e.target.value))} />
					</div>
					<div className={'flex flex-row items-center'}>
						<p className={'w-12'}>α° =</p>
						<Input type={'number'} placeholder={'α°'} value={aDegrees ?? ''} onChange={(e) => setADegrees(parse(e.target.value))} />
					</div>
					<div className={'flex flex-row items-center'}>
						<p className={'w-12'}>β° =</p>
						<Input type={'number'} placeholder={'β°'} value={bDegrees ?? ''} onChange={(e) => setBDegrees(parse(e.target.value))} />
					</div>
					<div className={'flex flex-row items-center'}>
						<p className={'w-12'}>γ° =</p>
						<Input type={'number'} placeholder={'γ°'} value={cDegrees ?? ''} onChange={(e) => setCDegrees(parse(e.target.value))} />
					</div>
				</div>

				<div className={'grid grid-cols-2 h-1/4 mt-4 gap-2'}>
					<div className={'w-1/2 space-x-2 flex flex-row'}>
						<Button onClick={calculate} disabled={Boolean((!a && !b && !c && !aDegrees && !bDegrees && !cDegrees) || (a && b && c && aDegrees && bDegrees && cDegrees))}>
              Calculate
            </Button>

						<Button onClick={() => {
							setA(undefined)
							setB(undefined)
							setC(undefined)
							setADegrees(undefined)
							setBDegrees(undefined)
							setCDegrees(undefined)
							setSteps([])
						}} disabled={!a && !b && !c && !aDegrees && !bDegrees && !cDegrees} variant={'outline'}>
							Clear
						</Button>

            <Button onClick={() => {
              setSteps([])
            }} disabled={!steps.length} variant={'outline'}>
              Clear Steps
            </Button>
					</div>

					<code className={'w-full h-full text-sm overflow-y-auto border rounded-md p-2'}>
						{steps.map((step, index) => (
							<p key={index}>{step}</p>
						))}
					</code>
				</div>
			</Card>
		</div>
	)
}