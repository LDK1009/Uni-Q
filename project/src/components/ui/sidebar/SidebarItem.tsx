import { Accordion, AccordionSummary, AccordionDetails, Typography, ListItem, styled } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { List, ListItemText } from "@mui/material";
import { useRouter } from "next/navigation";
import { SidebarItemType, useSidebarStore } from "@/store/SidebarStore";

type PropsType = {
  title: string;
};

const SidebarItem = ({ title }: PropsType) => {
  const router = useRouter();
  const { items, setIsOpen } = useSidebarStore();
  const filteredItems: SidebarItemType[] = items[title];

  const RenderFilteredItems = filteredItems.map((item) => (
    <StyledListItem
      key={item.name}
      onClick={() => {
        router.push(item.router);
        setIsOpen(false);
      }}
    >
      <ListItemText primary={item.name} />
    </StyledListItem>
  ));

  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>{RenderFilteredItems}</List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SidebarItem;

const StyledListItem = styled(ListItem)`
  &:hover {
    color: white;
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
`;

