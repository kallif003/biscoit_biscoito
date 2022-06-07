declare module "react-elastic-carousel" {
	export interface ReactElasticCarouselProps {
		className?: string
		itemsToShow?: number
		children?: any
		itemPadding?: number[]
		pagination?: boolean
	}

	declare class Carousel extends React.Component<ReactElasticCarouselProps> {}
	export default Carousel
}
