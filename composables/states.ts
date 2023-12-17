import type { Link } from '~/utils/dto/Link'

export const useViewportWidth = () => {
    const viewportWidth = useState<number>('viewportWidth', () => 0)

    if (process.client) {
        viewportWidth.value = Math.max(
            document.documentElement.clientWidth || 0,
            window.innerWidth || 0
        )
    }

    return viewportWidth
}

export const useViewportHeight = () => {
    const viewportHeight = useState<number>('viewportHeight', () => 0)

    if (process.client) {
        viewportHeight.value = Math.max(
            document.documentElement.clientHeight || 0,
            window.innerHeight || 0
        )
    }

    return viewportHeight
}

export const useFooterHeight = () => {
    const footerHeight = useState<number>('footerHeight', () => 0)

    if (process.client) {
        const footers = document.getElementsByTagName('footer')

        footerHeight.value = footers.length > 0 ? footers[0].clientHeight : 0
    }

    return footerHeight
}

export const useHeaderHeight = () => {
    const headerHeight = useState<number>('headerHeight', () => 0)

    if (process.client) {
        const headers = document.getElementsByTagName('header')

        headerHeight.value = headers.length > 0 ? headers[0].clientHeight : 0
    }

    return headerHeight
}

export const useMainMinHeight = () => {
    const mainMinHeight = useState<string>('mainMinHeight', () => '90vh')

    if (process.client) {
        const viewportHeight = useViewportHeight()
        const headerHeight = useHeaderHeight()

        mainMinHeight.value = `${viewportHeight.value - headerHeight.value}px`
    }

    return mainMinHeight
}

export const useDevice = () => {
    const device = useState<string>('device', () => 'mobile')

    if (process.client) {
        const viewportWidth = useViewportWidth()

        if (viewportWidth.value >= 1280) device.value = 'desktop'
        if (viewportWidth.value >= 768) device.value = 'tablet'
        device.value = 'mobile'
    }

    return device
}

export const useAuthorised = () => {
    const authorised = useState<boolean>('authorised', () => false)

    return authorised
}

export const useFullMenu = () => {
    const fullMenu = useState<{ heading: Link; links: Link[] }[]>(
        'fullMenu',
        () => [
            {
                heading: {
                    label: 'The Film',
                    to: '/film',
                },
                links: [
                    {
                        label: 'Trailer',
                        to: '/film?play_trailer=1',
                    },
                    {
                        label: 'View the Film',
                        to: '/film/educational-access',
                    },
                    {
                        label: 'From the Directors',
                        to: '/film#from-the-directors',
                    },
                    {
                        label: 'The Film is Just the Start',
                        to: '/film#just-the-start',
                    },
                    {
                        label: 'Review & Press',
                        to: '/film#reviews-and-press',
                    },
                    {
                        label: 'Film Credits',
                        to: '/film#credits',
                    },
                    {
                        label: 'Watch on Apple TV+',
                        to: 'https://tv.apple.com/us/movie/the-elephant-queen/umc.cmc.1ybrwww83rknjtwiuuemjfbvq',
                    },
                ],
            },
            {
                heading: {
                    label: 'Mobile Cinema',
                    to: '/mobile-cinema',
                },
                links: [
                    {
                        label: 'The Route',
                        to: '/mobile-cinema#route',
                    },
                    {
                        label: 'Videos',
                        to: '/mobile-cinema#video-diary',
                    },
                    {
                        label: 'Gallery',
                        to: '/mobile-cinema#gallery',
                    },
                    {
                        label: 'Press',
                        to: '/mobile-cinema#press',
                    },
                    {
                        label: 'Meet our Team',
                        to: '/mobile-cinema#team',
                    },
                    {
                        label: 'Meet our Partners',
                        to: '/mobile-cinema#partners',
                    },
                ],
            },
            {
                heading: {
                    label: 'Education Resources',
                    to: '/education-resources',
                },
                links: [
                    {
                        label: 'Young Reader Story Books',
                        to: '/education-resources/story-books?reading_level=Young%20Reader',
                    },
                    {
                        label: 'Confident Reader Story Books',
                        to: '/education-resources/story-books?reading_level=Confident%20Reader',
                    },
                    {
                        label: 'Colouring Books',
                        to: '/education-resources/colouring-books',
                    },
                    {
                        label: 'Theatre',
                        to: '/education-resources#theatre',
                    },
                    {
                        label: 'Videos & Learning Activities',
                        to: '/education-resources#learning',
                    },
                ],
            },
            {
                heading: {
                    label: 'Get Involved',
                    to: '/get-involved',
                },
                links: [
                    {
                        label: 'How Can I get involved and help?',
                        to: '/get-involved#help',
                    },
                    {
                        label: 'The Elephant Crisis',
                        to: '/get-involved#crisis',
                    },
                    {
                        label: 'Organisations working with Elephants',
                        to: '/get-involved#conservation-organisations',
                    },
                    {
                        label: 'Apple & Elephants',
                        to: '/get-involved#apple-and-elephants',
                    },
                ],
            },
            {
                heading: {
                    label: 'Mentorship Series',
                    to: '/education-resources/mentorship-series',
                },
                links: [
                    {
                        label: 'Interviews',
                        to: '/education-resources/mentorship-series',
                    },
                ],
            },
            {
                heading: {
                    label: 'Tales from the Bush',
                    to: '/education-resources/tales-from-the-bush',
                },
                links: [
                    {
                        label: 'Podcasts',
                        to: '/education-resources/tales-from-the-bush',
                    },
                ],
            },
        ]
    )

    return fullMenu
}
