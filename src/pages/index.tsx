import TipTapEditor from "@/components/TipTapEditor"
import React from "react"

const index = () => {
	return (
		<div className="flex flex-col gap-4 p-10">
            <h1 className="text-2xl font-semibold">Type in the editor below</h1>
			<TipTapEditor />
		</div>
	)
}

export default index
