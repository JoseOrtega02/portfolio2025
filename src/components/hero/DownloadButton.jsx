
import Download from '../Icons/Download'
import cvSpanish from "../../assets/CV_Jose_Ortega.pdf"
import cvEnglish from "../../assets/CV_Jose_Ortega_English.pdf"
// eslint-disable-next-line react/prop-types
export const DownloadButton = ({lang}) => {
  return (
          <a href={lang == "ES"? cvSpanish: cvEnglish} target='_blank' download={"Jose Ortega.pdf"} className="flex flex-row gap-1 font-istokWeb text-lg text-white border-2 border-white border-solid px-6 py-2 
                             transition-all duration-300 ease-in-out hover:bg-white hover:text-black group">
            CV
            <Download className="text-white group-hover:text-black transition-all duration-300" />
          </a>
  )
}
