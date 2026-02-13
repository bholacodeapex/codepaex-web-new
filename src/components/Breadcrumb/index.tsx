
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { Slash } from 'lucide-react';
import { Fragment } from 'react';

export function Breadcrumbs({ items, className }: any) {
    return (
        <Breadcrumb className={className}>
            <BreadcrumbList>
                {items.map((item: any, index: any) => (
                    <Fragment key={item.title}>
                        {index !== items.length - 1 && (
                            <BreadcrumbItem>
                                <BreadcrumbLink href={item.link} color='white' className='text-white font-semibold'>{item.title}</BreadcrumbLink>
                            </BreadcrumbItem>
                        )}
                        {index < items.length - 1 && (
                            <BreadcrumbSeparator>
                                <Slash />
                            </BreadcrumbSeparator>
                        )}
                        {index === items.length - 1 && (
                            <BreadcrumbPage className='text-white'>{item.title}</BreadcrumbPage>
                        )}
                    </Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
