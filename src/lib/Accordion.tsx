// import classNames from "classnames";
// import _ from "lodash";
// import { Minus, Plus } from "phosphor-react";
// import { useEffect, useRef, useState } from "react";

// interface AccordionItem {
//   labelIcon?: React.ReactNode;
//   label: string;
//   id: string;
//   component: React.ReactNode;
// }

// type AccordionState = {
//   [T: string]: boolean;
// };

// type Mode = "single" | "multiple";

// export interface AccordionWrapperProps {
//   items: AccordionItem[];
//   highlight?: boolean;
//   className?: string;
//   mode?: Mode;
//   initialState?: AccordionState;
// }

// export interface AccordionProps {
//   labelIcon?: React.ReactNode;
//   label: string;
//   accordionState: AccordionState;
//   id: string;
//   component: React.ReactNode;
//   highlight?: boolean;
//   handleOpenClose: () => void;
//   mode: Mode;
// }

// function Accordion({
//   labelIcon,
//   label,
//   accordionState,
//   id,
//   component,
//   highlight,
//   handleOpenClose,
//   mode,
// }: AccordionProps) {
//   const [showAccordionItem, setShowAccordionItem] =
//     useState(!!accordionState?.[id]);
//   const [height, setHeight] = useState<number | undefined>(
//     0
//   );
//   const ref = useRef<HTMLDivElement>(null);

//   const delayedUpdate = _.debounce(
//     () => handleOpenClose(),
//     450
//   );

//   const updateAccordionState = () => {
//     setShowAccordionItem((prev) => !prev);
//     !accordionState?.[id]
//       ? handleOpenClose()
//       : delayedUpdate();
//   };

//   useEffect(() => {
//     setHeight(ref?.current?.clientHeight);
//   });

//   useEffect(() => {
//     mode === "single" &&
//       showAccordionItem &&
//       showAccordionItem !== !!accordionState[id] &&
//       setShowAccordionItem(false);
//   }, [accordionState]);

//   const CNItemWrapper = classNames(
//     "border-b border-solid border-lightBorder last:border-b-0 relative",
//     highlight &&
//       showAccordionItem &&
//       "bg-grayLight before:absolute before:h-full before:w-[3px] before:bg-primary before:top before:first:rounded-[6px] before:last:rounded-tl-bl-[6px]"
//   );

//   const CNAccordionHandle = classNames(
//     "flex items-center py-4 px-6 text-sm w-full cursor-pointer",
//     highlight && showAccordionItem
//       ? "text-primary"
//       : "text-heading"
//   );

//   const CNTextLabel = classNames(
//     "font-semibold",
//     labelIcon && "ml-3"
//   );

//   return (
//     <div
//       className={CNItemWrapper}
//       style={{
//         overflow: "hidden",
//         transition: "all 400ms ease",
//         maxHeight: showAccordionItem
//           ? height! + 54
//           : "54px",
//       }}
//     >
//       <div
//         className={CNAccordionHandle}
//         onClick={updateAccordionState}
//       >
//         {labelIcon}
//         <span className={CNTextLabel}>{label}</span>
//         {!!accordionState?.[id] ? (
//           <Minus
//             size={20}
//             className="ml-auto text-heading"
//           />
//         ) : (
//           <Plus
//             size={20}
//             className="ml-auto cursor-pointer"
//           />
//         )}
//       </div>
//       {!!accordionState?.[id] && (
//         <div
//           className="w-full px-6 pb-4"
//           ref={ref}
//         >
//           {component}
//         </div>
//       )}
//     </div>
//   );
// }

// function AccordionWrapper({
//   className,
//   mode = "multiple",
//   highlight,
//   items,
//   initialState,
// }: AccordionWrapperProps) {
//   const CNWrapper = classNames(
//     "rounded-[6px] border border-solid border-lightBorder",
//     className && className
//   );

//   const [accordionState, setAccordionState] = useState<{
//     [T: string]: boolean;
//   }>(initialState || {});

//   const handleOpenClose = (id: string) => {
//     setAccordionState((prev) => {
//       return mode === "multiple"
//         ? {
//             ...prev,
//             [id]: !prev[id],
//           }
//         : {
//             [id]: !prev[id],
//           };
//     });
//   };

//   return (
//     <div className={CNWrapper}>
//       {items.map((item) => {
//         return (
//           <Accordion
//             label={item.label}
//             labelIcon={item.labelIcon}
//             key={item.id}
//             id={item.id}
//             component={item.component}
//             handleOpenClose={() => handleOpenClose(item.id)}
//             accordionState={accordionState}
//             highlight={highlight}
//             mode={mode}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export { Accordion, AccordionWrapper };
