import { EditorScript } from "./EditorScript";
import { FormSettings } from "./FormSettings";

export const PreviewVideo = () => {
  return (
    <section
      className="w-full h-full flex flex-col justify-between gap-4 p-4 rounded-2xl bg-gray-100
      lg:flex-row"
    >
      <div className="w-full lg:w-4/6">
        <EditorScript />
      </div>

      <div className="hidden lg:block lg:w-4/12">
        <FormSettings />

        <div className="mt-6">
          <h5 className="font-semibold mb-2">Previsualización</h5>

          <video src="#" controls className="rounded-xl"></video>
        </div>
      </div>
    </section >
  )
}
