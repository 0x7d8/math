import { Card } from "@/components/ui/card"
import DraggableTriangle from "@/components/draggable-triangle"
import { useState } from "react"
import { number } from "@rjweb/utils"
import { is, parse, round } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export default function PageTriangle() {
	const [a, setA] = useState<number>()
  const [b, setB] = useState<number>()
  const [c, setC] = useState<number>()
  const [aDegrees, setADegrees] = useState<number>()
  const [bDegrees, setBDegrees] = useState<number>()
  const [cDegrees, setCDegrees] = useState<number>()
  const [steps, setSteps] = useState<string[]>([])
  const [doRound, setDoRound] = useState(true)

  const rIfOn = (value: number) => doRound ? round(value) : value

	const calculate = () => {
    const is90Degrees = is(aDegrees, 90) ? 'a' : is(bDegrees, 90) ? 'b' : is(cDegrees, 90) ? 'c' : null
    const hypotenuse = is90Degrees === 'a' ? a : is90Degrees === 'b' ? b : is90Degrees === 'c' ? c : null,
      hypothenuseName = is90Degrees === 'a' ? 'a' : is90Degrees === 'b' ? 'b' : is90Degrees === 'c' ? 'c' : null

		console.log('Before:', { a, b, c, aDegrees, bDegrees, cDegrees, hypotenuse, hypothenuseName })

    if (a && b && c && (!aDegrees || !bDegrees || !cDegrees)) {
      if (!aDegrees) {
        setADegrees(rIfOn(number.toDegrees(Math.acos((b ** 2 + c ** 2 - a ** 2) / (2 * b * c)))))

        setSteps((old) => [
          ...old,
          `α° = cos⁻¹((b² + c² - a²) / 2bc) = ${rIfOn(number.toDegrees(Math.acos((b ** 2 + c ** 2 - a ** 2) / (2 * b * c))))}`
        ])
      } else if (!bDegrees) {
        setBDegrees(rIfOn(number.toDegrees(Math.acos((a ** 2 + c ** 2 - b ** 2) / (2 * a * c)))))

        setSteps((old) => [
          ...old,
          `β° = cos⁻¹((a² + c² - b²) / 2ac) = ${rIfOn(number.toDegrees(Math.acos((a ** 2 + c ** 2 - b ** 2) / (2 * a * c))))}`
        ])
      } else if (!cDegrees) {
        setCDegrees(rIfOn(number.toDegrees(Math.acos((a ** 2 + b ** 2 - c ** 2) / (2 * a * b)))))

        setSteps((old) => [
          ...old,
          `γ° = cos⁻¹((a² + b² - c²) / 2ab) = ${rIfOn(number.toDegrees(Math.acos((a ** 2 + b ** 2 - c ** 2) / (2 * a * b))))}`
        ])
      }

      return
    } else if (is90Degrees === 'a' && a && b && hypotenuse && !c) {
      setC(rIfOn(Math.sqrt(hypotenuse ** 2 - b ** 2)))

      setSteps((old) => [
        ...old,
        `c = sqrt(${hypotenuse}² - ${b}²) = ${rIfOn(Math.sqrt(hypotenuse ** 2 - b ** 2))}`
      ])
      return
    } else if (is90Degrees === 'b' && a && b && hypotenuse && !c) {
      setC(rIfOn(Math.sqrt(hypotenuse ** 2 - a ** 2)))

      setSteps((old) => [
        ...old,
        `c = sqrt(${hypotenuse}² - ${a}²) = ${rIfOn(Math.sqrt(hypotenuse ** 2 - a ** 2))}`
      ])
      return
    } else if (is90Degrees === 'c' && a && b && hypotenuse && !c) {
      setC(rIfOn(Math.sqrt(a ** 2 + b ** 2)))

      setSteps((old) => [
        ...old,
        `c = sqrt(${a}² + ${b}²) = ${rIfOn(Math.sqrt(a ** 2 + b ** 2))}`
      ])
      return
    } else if (is90Degrees === 'a' && a && c && hypotenuse && !b) {
      setB(rIfOn(Math.sqrt(hypotenuse ** 2 - c ** 2)))

      setSteps((old) => [
        ...old,
        `b = sqrt(${hypotenuse}² - ${c}²) = ${rIfOn(Math.sqrt(hypotenuse ** 2 - c ** 2))}`
      ])
      return
    } else if (is90Degrees === 'b' && b && c && hypotenuse && !a) {
      setA(rIfOn(Math.sqrt(hypotenuse ** 2 - c ** 2)))

      setSteps((old) => [
        ...old,
        `a = sqrt(${hypotenuse}² - ${c}²) = ${rIfOn(Math.sqrt(hypotenuse ** 2 - c ** 2))}`
      ])
      return
    } else if (is90Degrees === 'c' && a && c && hypotenuse && !b) {
      setB(rIfOn(Math.sqrt(hypotenuse ** 2 - a ** 2)))

      setSteps((old) => [
        ...old,
        `b = sqrt(${hypotenuse}² - ${a}²) = ${rIfOn(Math.sqrt(hypotenuse ** 2 - a ** 2))}`
      ])
      return
    } else if (is90Degrees === 'a' && b && c && hypotenuse && !a) {
      setA(rIfOn(Math.sqrt(hypotenuse ** 2 - b ** 2)))

      setSteps((old) => [
        ...old,
        `a = sqrt(${hypotenuse}² - ${b}²) = ${rIfOn(Math.sqrt(hypotenuse ** 2 - b ** 2))}`
      ])
      return
    } else if (is90Degrees === 'b' && a && c && hypotenuse && !b) {
      setB(rIfOn(Math.sqrt(hypotenuse ** 2 - a ** 2)))

      setSteps((old) => [
        ...old,
        `b = sqrt(${hypotenuse}² - ${a}²) = ${rIfOn(Math.sqrt(hypotenuse ** 2 - a ** 2))}`
      ])
      return
    } else if (is90Degrees === 'c' && a && b && hypotenuse && !c) {
      setA(rIfOn(Math.sqrt(hypotenuse ** 2 - b ** 2)))

      setSteps((old) => [
        ...old,
        `a = sqrt(${hypotenuse}² - ${b}²) = ${rIfOn(Math.sqrt(hypotenuse ** 2 - b ** 2))}`
      ])
      return
    } else if (is90Degrees === 'c' && b && c && hypotenuse && !a) {
      setA(rIfOn(Math.sqrt(hypotenuse ** 2 - b ** 2)))

      setSteps((old) => [
        ...old,
        `a = sqrt(${hypotenuse}² - ${b}²) = ${rIfOn(Math.sqrt(hypotenuse ** 2 - b ** 2))}`
      ])
      return
    } else if (is90Degrees === 'b' && a && c && hypotenuse && !b) {
      setB(rIfOn(Math.sqrt(hypotenuse ** 2 - a ** 2)))

      setSteps((old) => [
        ...old,
        `b = sqrt(${hypotenuse}² - ${a}²) = ${rIfOn(Math.sqrt(hypotenuse ** 2 - a ** 2))}`
      ])
      return
    } else if (is90Degrees === 'a' && a && b && hypotenuse && !c) {
      setC(rIfOn(Math.sqrt(hypotenuse ** 2 - b ** 2)))

      setSteps((old) => [
        ...old,
        `c = sqrt(${hypotenuse}² - ${b}²) = ${rIfOn(Math.sqrt(hypotenuse ** 2 - b ** 2))}`
      ])
      return
    }

    else if (aDegrees && bDegrees && !cDegrees) {
      setCDegrees(rIfOn(180 - aDegrees - bDegrees))

      setSteps((old) => [
        ...old,
        `γ° = 180 - ${aDegrees} - ${bDegrees} = ${rIfOn(180 - aDegrees - bDegrees)}`
      ])
      return
    } else if (aDegrees && cDegrees && !bDegrees) {
      setBDegrees(rIfOn(180 - aDegrees - cDegrees))

      setSteps((old) => [
        ...old,
        `β° = 180 - ${aDegrees} - ${cDegrees} = ${rIfOn(180 - aDegrees - cDegrees)}`
      ])
      return
    } else if (bDegrees && cDegrees && !aDegrees) {
      setADegrees(rIfOn(180 - bDegrees - cDegrees))

      setSteps((old) => [
        ...old,
        `α° = 180 - ${bDegrees} - ${cDegrees} = ${rIfOn(180 - bDegrees - cDegrees)}`
      ])
      return
    }

    else if (hypothenuseName && !hypotenuse && aDegrees && bDegrees && cDegrees) {
      if (hypothenuseName === 'c' && a) {
        setC(rIfOn(a / Math.sin(number.toRadians(aDegrees))))

        setSteps((old) => [
          ...old,
          `c = ${a} / sin(${aDegrees}) = ${rIfOn(a / Math.sin(number.toRadians(aDegrees)))}`
        ])
      } else if (hypothenuseName === 'c' && b) {
        setC(rIfOn(b / Math.sin(number.toRadians(bDegrees))))

        setSteps((old) => [
          ...old,
          `c = ${b} / sin(${bDegrees}) = ${rIfOn(b / Math.sin(number.toRadians(bDegrees)))}`
        ])
      } else if (hypothenuseName === 'b' && a) {
        setB(rIfOn(a / Math.sin(number.toRadians(aDegrees))))

        setSteps((old) => [
          ...old,
          `b = ${a} / sin(${aDegrees}) = ${rIfOn(a / Math.sin(number.toRadians(aDegrees)))}`
        ])
      } else if (hypothenuseName === 'b' && c) {
        setB(rIfOn(c / Math.sin(number.toRadians(cDegrees))))

        setSteps((old) => [
          ...old,
          `b = ${c} / sin(${cDegrees}) = ${rIfOn(c / Math.sin(number.toRadians(cDegrees)))}`
        ])
      } else if (hypothenuseName === 'a' && b) {
        setA(rIfOn(b / Math.sin(number.toRadians(bDegrees))))

        setSteps((old) => [
          ...old,
          `a = ${b} / sin(${bDegrees}) = ${rIfOn(b / Math.sin(number.toRadians(bDegrees)))}`
        ])
      } else if (hypothenuseName === 'a' && c) {
        setA(rIfOn(c / Math.sin(number.toRadians(cDegrees))))

        setSteps((old) => [
          ...old,
          `a = ${c} / sin(${cDegrees}) = ${rIfOn(c / Math.sin(number.toRadians(cDegrees)))}`
        ])
      }

      return
    } else if (hypotenuse && hypothenuseName && aDegrees && bDegrees && cDegrees) {
      if (hypothenuseName === 'c' && !a && !b) {
        setA(rIfOn(hypotenuse * Math.sin(number.toRadians(aDegrees))))
        setB(rIfOn(hypotenuse * Math.sin(number.toRadians(bDegrees))))

        setSteps((old) => [
          ...old,
          `a = ${hypotenuse} * sin(${aDegrees}) = ${rIfOn(hypotenuse * Math.sin(number.toRadians(aDegrees)))}`,
          `b = ${hypotenuse} * sin(${bDegrees}) = ${rIfOn(hypotenuse * Math.sin(number.toRadians(bDegrees)))}`
        ])
      } else if (hypothenuseName === 'b' && !a && !c) {
        setA(rIfOn(hypotenuse * Math.sin(number.toRadians(aDegrees))))
        setC(rIfOn(hypotenuse * Math.sin(number.toRadians(cDegrees))))

        setSteps((old) => [
          ...old,
          `a = ${hypotenuse} * sin(${aDegrees}) = ${rIfOn(hypotenuse * Math.sin(number.toRadians(aDegrees)))}`,
          `c = ${hypotenuse} * sin(${cDegrees}) = ${rIfOn(hypotenuse * Math.sin(number.toRadians(cDegrees)))}`
        ])
      } else if (hypothenuseName === 'a' && !b && !c) {
        setB(rIfOn(hypotenuse * Math.sin(number.toRadians(bDegrees))))
        setC(rIfOn(hypotenuse * Math.sin(number.toRadians(cDegrees))))

        setSteps((old) => [
          ...old,
          `b = ${hypotenuse} * sin(${bDegrees}) = ${rIfOn(hypotenuse * Math.sin(number.toRadians(bDegrees)))}`,
          `c = ${hypotenuse} * sin(${cDegrees}) = ${rIfOn(hypotenuse * Math.sin(number.toRadians(cDegrees)))}`
        ])
      }

      return
    }

    else if (a && b && c && (!aDegrees || !bDegrees || !cDegrees)) {
      setADegrees(rIfOn(number.toDegrees(Math.acos((b ** 2 + c ** 2 - a ** 2) / (2 * b * c)))))
      setBDegrees(rIfOn(number.toDegrees(Math.acos((a ** 2 + c ** 2 - b ** 2) / (2 * a * c)))))
      setCDegrees(rIfOn(number.toDegrees(Math.acos((a ** 2 + b ** 2 - c ** 2) / (2 * a * b)))))

      setSteps((old) => [
        ...old,
        `α° = cos⁻¹((b² + c² - a²) / 2bc) = ${rIfOn(number.toDegrees(Math.acos((b ** 2 + c ** 2 - a ** 2) / (2 * b * c))))}`,
        `β° = cos⁻¹((a² + c² - b²) / 2ac) = ${rIfOn(number.toDegrees(Math.acos((a ** 2 + c ** 2 - b ** 2) / (2 * a * c))))}`,
        `γ° = cos⁻¹((a² + b² - c²) / 2ab) = ${rIfOn(number.toDegrees(Math.acos((a ** 2 + b ** 2 - c ** 2) / (2 * a * b))))}`
      ])
      return
    }

		// law of sines
		else if (a && b && aDegrees && !bDegrees) {
			setBDegrees(rIfOn(number.toDegrees(Math.asin(b * Math.sin(number.toRadians(aDegrees)) / a))))

			setSteps((old) => [
				...old,
				`β° = sin⁻¹(b * sin(α°) / a) = ${rIfOn(number.toDegrees(Math.asin(b * Math.sin(number.toRadians(aDegrees)) / a)))}`
			])
			return
		} else if (a && b && bDegrees && !aDegrees) {
			setADegrees(rIfOn(number.toDegrees(Math.asin(a * Math.sin(number.toRadians(bDegrees)) / b))))

			setSteps((old) => [
				...old,
				`α° = sin⁻¹(a * sin(β°) / b) = ${rIfOn(number.toDegrees(Math.asin(a * Math.sin(number.toRadians(bDegrees)) / b)))}`
			])
			return
		} else if (a && c && aDegrees && !cDegrees) {
			setCDegrees(rIfOn(number.toDegrees(Math.asin(c * Math.sin(number.toRadians(aDegrees)) / a))))

			setSteps((old) => [
				...old,
				`γ° = sin⁻¹(c * sin(α°) / a) = ${rIfOn(number.toDegrees(Math.asin(c * Math.sin(number.toRadians(aDegrees)) / a)))}`
			])
			return
		} else if (a && c && cDegrees && !aDegrees) {
			setADegrees(rIfOn(number.toDegrees(Math.asin(a * Math.sin(number.toRadians(cDegrees)) / c))))

			setSteps((old) => [
				...old,
				`α° = sin⁻¹(a * sin(γ°) / c) = ${rIfOn(number.toDegrees(Math.asin(a * Math.sin(number.toRadians(cDegrees)) / c)))}`
			])
			return
		} else if (b && c && bDegrees && !cDegrees) {
			setCDegrees(rIfOn(number.toDegrees(Math.asin(c * Math.sin(number.toRadians(bDegrees)) / b))))

			setSteps((old) => [
				...old,
				`γ° = sin⁻¹(c * sin(β°) / b) = ${rIfOn(number.toDegrees(Math.asin(c * Math.sin(number.toRadians(bDegrees)) / b)))}`
			])
			return
		} else if (b && c && cDegrees && !bDegrees) {
			setBDegrees(rIfOn(number.toDegrees(Math.asin(b * Math.sin(number.toRadians(cDegrees)) / c))))

			setSteps((old) => [
				...old,
				`β° = sin⁻¹(b * sin(γ°) / c) = ${rIfOn(number.toDegrees(Math.asin(b * Math.sin(number.toRadians(cDegrees)) / c)))}`
			])
			return
		}

		// if pythagorean theorem fails (due to not having 90° anywhere), calculate missing sides using angles
    else if (!a && b && c && aDegrees && bDegrees && cDegrees) {
      setA(rIfOn((b * Math.sin(number.toRadians(aDegrees))) / Math.sin(number.toRadians(bDegrees))))
      
      setSteps((old) => [
        ...old,
        `a = (${b} * sin(${aDegrees})) / sin(${bDegrees}) = ${rIfOn((b * Math.sin(number.toRadians(aDegrees))) / Math.sin(number.toRadians(bDegrees)))}`
      ])
      return
    } else if (a && !b && c && aDegrees && bDegrees && cDegrees) {
      setB(rIfOn((a * Math.sin(number.toRadians(bDegrees))) / Math.sin(number.toRadians(aDegrees))))
      
      setSteps((old) => [
        ...old,
        `b = (${a} * sin(${bDegrees})) / sin(${aDegrees}) = ${rIfOn((a * Math.sin(number.toRadians(bDegrees))) / Math.sin(number.toRadians(aDegrees)))}`
      ])
      return
    } else if (a && b && !c && aDegrees && bDegrees && cDegrees) {
      setC(rIfOn((a * Math.sin(number.toRadians(cDegrees))) / Math.sin(number.toRadians(aDegrees))))
      
      setSteps((old) => [
        ...old,
        `c = (${a} * sin(${cDegrees})) / sin(${aDegrees}) = ${rIfOn((a * Math.sin(number.toRadians(cDegrees))) / Math.sin(number.toRadians(aDegrees)))}`
      ])
      return
    } else if (!a && b && !c && aDegrees && bDegrees && cDegrees) {
      setA(rIfOn((b * Math.sin(number.toRadians(aDegrees))) / Math.sin(number.toRadians(bDegrees))))
      setC(rIfOn((b * Math.sin(number.toRadians(cDegrees))) / Math.sin(number.toRadians(bDegrees))))
      
      setSteps((old) => [
        ...old,
        `a = (${b} * sin(${aDegrees})) / sin(${bDegrees}) = ${rIfOn((b * Math.sin(number.toRadians(aDegrees))) / Math.sin(number.toRadians(bDegrees)))}`,
        `c = (${b} * sin(${cDegrees})) / sin(${bDegrees}) = ${rIfOn((b * Math.sin(number.toRadians(cDegrees))) / Math.sin(number.toRadians(bDegrees)))}`
      ])
      return
    } else if (!a && !b && c && aDegrees && bDegrees && cDegrees) {
      setA(rIfOn((c * Math.sin(number.toRadians(aDegrees))) / Math.sin(number.toRadians(cDegrees))))
      setB(rIfOn((c * Math.sin(number.toRadians(bDegrees))) / Math.sin(number.toRadians(cDegrees))))
      
      setSteps((old) => [
        ...old,
        `a = (${c} * sin(${aDegrees})) / sin(${cDegrees}) = ${rIfOn((c * Math.sin(number.toRadians(aDegrees))) / Math.sin(number.toRadians(cDegrees)))}`,
        `b = (${c} * sin(${bDegrees})) / sin(${cDegrees}) = ${rIfOn((c * Math.sin(number.toRadians(bDegrees))) / Math.sin(number.toRadians(cDegrees)))}`
      ])
      return
    } else if (a && !b && !c && aDegrees && bDegrees && cDegrees) {
      setB(rIfOn((a * Math.sin(number.toRadians(bDegrees))) / Math.sin(number.toRadians(aDegrees))))
      setC(rIfOn((a * Math.sin(number.toRadians(cDegrees))) / Math.sin(number.toRadians(aDegrees))))
      
      setSteps((old) => [
        ...old,
        `b = (${a} * sin(${bDegrees})) / sin(${aDegrees}) = ${rIfOn((a * Math.sin(number.toRadians(bDegrees))) / Math.sin(number.toRadians(aDegrees)))}`,
        `c = (${a} * sin(${cDegrees})) / sin(${aDegrees}) = ${rIfOn((a * Math.sin(number.toRadians(cDegrees))) / Math.sin(number.toRadians(aDegrees)))}`
      ])
      return
    }

    // check for equal sides to calculate angles
    else if (a && b && a === b && !aDegrees && !bDegrees && cDegrees) {
      const rest = (180 - cDegrees) / 2

      setADegrees(rIfOn(rest))
      setBDegrees(rIfOn(rest))

      setSteps((old) => [
        ...old,
        `α° = (180 - γ°) / 2 = ${rIfOn(rest)}`,
        `β° = (180 - γ°) / 2 = ${rIfOn(rest)}`
      ])
      return
    } else if (a && c && a === c && !aDegrees && bDegrees && !cDegrees) {
      const rest = (180 - bDegrees) / 2

      setADegrees(rIfOn(rest))
      setCDegrees(rIfOn(rest))

      setSteps((old) => [
        ...old,
        `α° = (180 - β°) / 2 = ${rIfOn(rest)}`,
        `γ° = (180 - β°) / 2 = ${rIfOn(rest)}`
      ])
      return
    } else if (b && c && b === c && aDegrees && !bDegrees && !cDegrees) {
      const rest = (180 - aDegrees) / 2

      setBDegrees(rIfOn(rest))
      setCDegrees(rIfOn(rest))

      setSteps((old) => [
        ...old,
        `β° = (180 - α°) / 2 = ${rIfOn(rest)}`,
        `γ° = (180 - α°) / 2 = ${rIfOn(rest)}`
      ])
      return
    } else if (a && b && c && a === b && a === c && b === c && !aDegrees && !bDegrees && !cDegrees) {
      const rest = 180 / 3

      setADegrees(rIfOn(rest))
      setBDegrees(rIfOn(rest))
      setCDegrees(rIfOn(rest))

      setSteps((old) => [
        ...old,
        `α° = 180 / 3 = ${rIfOn(rest)}`,
        `β° = 180 / 3 = ${rIfOn(rest)}`,
        `γ° = 180 / 3 = ${rIfOn(rest)}`
      ])
      return
    }

    console.log('After:', { a, b, c, aDegrees, bDegrees, cDegrees, hypotenuse, hypothenuseName })
  }

	return (
		<div className={'flex flex-row justify-center items-center h-full'}>
			<Card className={'p-4 xl:w-3/4 xl:h-1/2 h-3/4 w-full relative'}>
        <div className={'grid xl:grid-cols-2 grid-cols-1 gap-2'}>
          <div className={'flex flex-col w-full'}>
            <h1 className={'text-2xl font-semibold'}>Calculate Triangle</h1>

            <form className={'flex flex-col xl:grid xl:grid-cols-3 gap-2 w-full mt-4 space-y-2'} onSubmit={(e) => {
              e.preventDefault()
              calculate()
            }}>
              <button type={'submit'} hidden>Calculate</button>

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
            </form>

            <div className={'w-full justify-between items-center flex flex-row mt-4'}>
              <div className={'flex flex-row items-center space-x-2'}>
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

          <div className={'hidden xl:inline h-full w-full -mt-3'}>
            <DraggableTriangle />
          </div>
        </div>
			</Card>
		</div>
	)
}