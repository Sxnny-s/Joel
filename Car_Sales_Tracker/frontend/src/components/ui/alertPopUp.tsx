import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"


const alertPopUp = () => {
  return (
    <>
        <Alert className="mb-7">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Coming Soon</AlertTitle>
        <AlertDescription>
            The Sales Table will be live in the next update. Feedback welcome!
        </AlertDescription>
        </Alert>
    </>
  )
}

export default alertPopUp



