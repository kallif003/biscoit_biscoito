declare module "react-elastic-carousel" {
	export interface ReactElasticCarouselProps {
		className?: string
		itemsToShow?: number
		children?: any
		itemPadding?: number[]
	}

	declare class Carousel extends React.Component<ReactElasticCarouselProps> {}
	export default Carousel
}
