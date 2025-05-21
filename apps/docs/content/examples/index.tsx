import React from 'react'

type Component = Record<string, { name: string, component: any }>

export const Components: Component = {
	"listbox": {
		name: "listbox",
		component: React.lazy(() => import('@repo/ui/card'))
	},
	"menu": {
		name: "menu",
		component: React.lazy(() => import('@/components/example-button'))
	},
};
