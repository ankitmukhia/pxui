import {
  RocketIcon,
  FileTextIcon,
  CodeIcon,
  MoonIcon,
  TypeIcon,
  AccessibilityIcon,
} from "lucide-react";

interface FileStructureType {
  title: string;
  file_items?: string[];
}

interface ProvidesType {
  title: string;
}

interface PricingCardTypes {
  plan: string;
  description: string;
  per?: string;
  price: string;
  provides: ProvidesType[];
}

export const pricingCard: PricingCardTypes[] = [
  {
    plan: "Starter",
    description: "Begin Your Journey",
    price: "Free",
    provides: [
      { title: "Listing Managment" },
      { title: "Transaction Security" },
      { title: "Basic Analytics" },
    ],
  },
  {
    plan: "Pro",
    description: "Expand Your Reach",
    price: "$19",
    per: "month",
    provides: [
      { title: "Listing Managment" },
      { title: "Transaction Security" },
      { title: "Advanced Analytics" },
      { title: "Document Managment" },
      { title: "Priority Customer Support" },
    ],
  },
  {
    plan: "Enterprise",
    description: "Unlock Unlimited Potential",
    price: "$96",
    per: "month",
    provides: [
      { title: "Listing Managment" },
      { title: "Transaction Security" },
      { title: "Advanced Analytics" },
      { title: "Document Managment" },
      { title: "Priority Customer Support" },
      { title: "Premium Support" },
    ],
  },
];

export const fileStructure: FileStructureType[] = [
  {
    title: "actions",
    file_items: [
      "button.tsx",
      "button-group.tsx",
      "compact-button.tsx",
      "fancy-button.tsx",
      "social-button.tsx",
    ],
  },
  {
    title: "form-elements",
  },
  {
    title: "indicators",
  },
  {
    title: "pickers",
  },
  {
    title: "overlay",
  },
  {
    title: "data-display",
  },
  {
    title: "navigation",
  },
  {
    title: "feedback",
  },
  {
    title: "panel",
  },
];

export const codeString = `import * as Button from './components/button';
import {
  RiArrowLeftSLine,
  RiArrowRightSLine
} from 'lucide-react';

export const Button = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-4'>
      <Button.Root variant='primary' mode='filled'>
        <Button.Icon as={RiArrowLeftSLine} />
          Learn More
        <Button.Icon as={RiArrowRightSLine} />
      </Button.Root>

      <Button.Root variant='primary' mode='filled'>
        <Button.Icon as={RiArrowLeftSLine} />
          Learn More
        <Button.Icon as={RiArrowRightSLine} />
      </Button.Root>
    </div>
  );
}
`;

export const features = [
  {
    icon: RocketIcon,
    title: "180+ Components",
    description: "180+ versatile UI elements for rapid development.",
  },
  {
    icon: FileTextIcon,
    title: "Production Ready",
    description: "Pre-optimized code for instant project deployment.",
  },
  {
    icon: FileTextIcon,
    title: "Figma File",
    description: "Comprehensive design kit for seamless UI/UX workflow.",
  },
  {
    icon: FileTextIcon,
    title: "Customizable",
    description: "Highly flexible system for unique brand expression.",
  },
  {
    icon: FileTextIcon,
    title: "Responsive",
    description: "Adaptive layouts for multi-device compatibility.",
  },
  {
    icon: CodeIcon,
    title: "Easy for Devs",
    description: "Intuitive framework for rapid and efficient development.",
  },
  {
    icon: MoonIcon,
    title: "Dark Mode",
    description: "Effortless integration for enhanced user experience.",
  },
  {
    icon: TypeIcon,
    title: "TypeScript",
    description: "Strong typing for enhanced code maintainability.",
  },
  {
    icon: AccessibilityIcon,
    title: "Accessible",
    description: "WCAG-compliant design for inclusive user access.",
  },
];
