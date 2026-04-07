"use client"
import { useTranslations } from "next-intl"
import { debounce } from "lodash-es"
export default function Box() {
  const t = useTranslations()
  const handleSearch = debounce(() => {
    console.log("Searching...")
  }, 300)
  return (
    <div>
      <button onClick={handleSearch}>search</button>
      <div> {t("libs.title")}</div>
    </div>
  )
}
