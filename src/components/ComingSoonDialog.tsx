import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ComingSoonDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ComingSoonDialog = ({ open, onOpenChange }: ComingSoonDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Coming Very Soon!</DialogTitle>
          <DialogDescription className="text-base pt-4">
            Our browser extension is currently in final development and will be available for download very soon. 
            Stay tuned for the launch!
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center pt-4">
          <button
            onClick={() => onOpenChange(false)}
            className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Got it
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComingSoonDialog;
