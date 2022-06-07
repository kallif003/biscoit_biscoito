declare module "react-elastic-carousel" {
	export interface ReactElasticCarouselProps {
		className?: string
		itemsToShow?: number
		children?: any
		itemPadding?: number[]
		// Add more props here!
	}

	declare class Carousel extends React.Component<ReactElasticCarouselProps> {}
	export default Carousel
}
